import { getQuestionByKey, insertQuestions, updateQuestions } from "@/app/actions";
import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

//TODO: do more/better validation to ensure request is coming in from GoogleSheets
export async function GET() {
  console.debug('in prompt webhook')

  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet('1VrRNi7H8tdFKn_MHvMSFxahE_JUODtYi1_IlfYNKItg', serviceAccountAuth);
    await doc.loadInfo();
    console.log("DOC TITLE: ", doc.title);

    const sheet = doc.sheetsById[1469416569];
    console.log("SHEET TITLE: ", sheet.title);

    const rows = await sheet.getRows({limit: 10});
    const questions = [];

    for(let i=0; i<rows.length; i++) {
      const row = rows[i];
      const questionData = {
        key: row.get('Key'),
        question: row.get('Question')?.replace(/'/g, "''"), // Escape apostrophes for SQL
        subText: row.get('Subtext'),
        placeholder: row.get('Example Text'),
        isRequired: row.get('Required') === 'Y',
        questionType: row.get('Question Type'),
        relations: row.get('Choices')
      };
      questions.push(questionData);
      console.log("QUESTION DATA: ", questionData);

      const question = await getQuestionByKey(questionData.key);
      if (question.length > 0) {
        updateQuestions({
          key: questionData.key,
          question: questionData.question,
          subTitle: questionData.subText,
          placeholder: questionData.placeholder,
          isRequired: questionData.isRequired,
          questionType: questionData.questionType,
          relations: questionData.relations
        });
      } else {
        insertQuestions({
          key: questionData.key,
          question: questionData.question,
          subTitle: questionData.subText,
          placeholder: questionData.placeholder,
          isRequired: questionData.isRequired,
          questionType: questionData.questionType,
          relations: questionData.relations
        });
      }
    }

    return NextResponse.json({ success: true, questions }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 })
  }
}
