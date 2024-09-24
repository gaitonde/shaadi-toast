import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    console.log("SERVICE ACCOUNT AUTH email: ", serviceAccountAuth.email);
    console.log("SERVICE ACCOUNT AUTH key: ", serviceAccountAuth.key);
    const doc = new GoogleSpreadsheet('1VrRNi7H8tdFKn_MHvMSFxahE_JUODtYi1_IlfYNKItg', serviceAccountAuth);
    await doc.loadInfo();
    console.log("DOC TITLE: ", doc.title);

    const sheet = doc.sheetsById[0];
    console.log("SHEET TITLE: ", sheet.title);

    const rows = await sheet.getRows({limit: 10});
    const questions = [];

    for(let i=0; i<rows.length; i++) {
      const row = rows[i];
      const questionData = {
        question: row.get('Question'),
        subtext: row.get('Subtext'),
        exampleText: row.get('Example Text'),
        required: row.get('Required'),
        questionType: row.get('Question Type'),
        questionChoices: row.get('Choices')
      };
      questions.push(questionData);

      // Existing console.log statements can be kept or removed as needed
    }

    return NextResponse.json({
      title: sheet.title,
      sheetId: sheet.sheetId,
      questions: questions
    });
  } catch (error) {
    console.error('Error reading Google Sheet:', error);
    return NextResponse.json({ error: 'Failed to read Google Sheet' }, { status: 500 });
  }
}