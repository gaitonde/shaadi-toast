# General Guidelines
- use NextJS objects: NextRequest, NextResponse, etc
- when returning a response, default to using NextResponse.json
- eg. for creation, return NextResponse.json({ "name": "John" }, { status: 201 });
- eg. for errors, return NextResponse.json({ error }, { status: 500 });
- always return a boolean value for success or failure

# Example General Code
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    return NextResponse.json({ message: 'Hello, World!' }, { status: 200 });
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { message } = body;
    // insert message into database
    return NextResponse.json({ message: message }, { status: 201 });
}
```

# General Resources
https://developer.mozilla.org/docs/Web/API/Response
https://developer.mozilla.org/docs/Web/API/Request

# Google Integration Guidelines
- when possbile use Google SDKs eg. (google-spreadsheet)[https://www.npmjs.com/package/google-spreadsheet]
- when doing JWT auth, use the GoogleAuth library (google-auth-library)[https://www.npmjs.com/package/google-auth-library]


# Example Google Integration Code
```typescript
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const doc = new GoogleSpreadsheet('1VrRNi7H8tdFKn_MHvMSFxahE_JUODtYi1_IlfYNKItg');
await doc.loadInfo(); // loads document properties and worksheets

const sheet = doc.sheetsById[0]; // or use doc.sheetsByTitle[title]
```


# Email
- when sending an email, always use the resend sdk
- https://resend.com/docs/api-reference/introduction

# Example Email Code
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const data = {
  from: 'onboarding@resend.dev',
  to: ['delivered@resend.dev'],
  subject: 'hello world',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
};
```
