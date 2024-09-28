import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const jwt = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: SCOPES,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, speech } = body;

    if (!email || !speech) {
      return NextResponse.json({
        error: 'An email address and speech are required',
        success: false
      }, { status: 400 });
    }

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID as string, jwt);
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle[process.env.GOOGLE_SHEET_BASE + 'email'];
    const rows = await sheet.getRows();
    const templateRow = rows[0];

    const fromEmail = templateRow.get('from') || 'nicespeech@shaaditoast.com';
    const subject = templateRow.get('subject') || 'Here is your speech!';
    const htmlTemplate = templateRow.get('html') || '<p>{speech}</p>';

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = {
      from: fromEmail,
      to: email,
      subject: subject,
      html: htmlTemplate.replace('{speech}', speech),
    };

    const { data: resendData, error } = await resend.emails.send(data);



    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email', success: false }, { status: 500 });
    }

    console.log('Email sent successfully');
    console.log('TODO: store resendData', resendData?.id);

    return NextResponse.json({
      message: 'Email sent successfully',
      success: true,
      id: resendData?.id,
      data: {
        id: resendData?.id
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({
      error: 'Internal server error',
      success: false,
      data: {
        error: error
      }
    }, { status: 500 });
  }
}