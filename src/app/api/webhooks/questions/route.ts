import { insertQuestions, deleteAllQuestions } from "@/app/actions";
import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const ENV_GOOGLE_SHEET_ID = '1VrRNi7H8tdFKn_MHvMSFxahE_JUODtYi1_IlfYNKItg';
//TODO: should have proper naming convention for the sheet title and env variable names
const ENV_GOOGLE_SHEET_TITLE = 'ShaadiToast';

let serviceAccountAuth: JWT | null = null;

function getServiceAccountAuth(): JWT {
  if (!serviceAccountAuth) {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('Missing Google service account credentials');
    }
    serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle newline characters
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  }
  return serviceAccountAuth;
}

//TODO: do more/better validation to ensure request is coming in from GoogleSheets
export async function GET() {
  console.log('in prompt webhook')

  try {
    const auth = getServiceAccountAuth();
    const doc = new GoogleSpreadsheet(ENV_GOOGLE_SHEET_ID, auth);
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle[ENV_GOOGLE_SHEET_TITLE];
    const rows = await sheet.getRows();
    const questions = [];

    await deleteAllQuestions();

    for(const row of rows) {
      const questionData = {
        id: row.rowNumber,
        key: row.get('Key'),
        question: row.get('Question')?.replace(/'/g, "''"), // Escape apostrophes for SQL
        subText: row.get('Subtext'),
        placeholder: row.get('Example Text'),
        isRequired: row.get('Required') === 'Y',
        questionType: row.get('Question Type'),
        relations: row.get('Choices')
      };
      questions.push(questionData);

      const relations: string[] = questionData.questionType.toLowerCase() === 'multiplechoice' ? questionData.relations.split(',') : null;

      insertQuestions({
        id: questionData.id,
        key: questionData.key,
        question: questionData.question,
        subTitle: questionData.subText,
        placeholder: questionData.placeholder,
        isRequired: questionData.isRequired,
        questionType: questionData.questionType,
        relations: relations
      });
    }

    return NextResponse.json({
      success: true,
      questions: questions,
      count: questions.length,
      title: sheet.title,
      sheetId: sheet.sheetId,
    }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: error,
      title: ENV_GOOGLE_SHEET_TITLE,
      sheetId: ENV_GOOGLE_SHEET_ID
    }, { status: 500 })
  }
}
