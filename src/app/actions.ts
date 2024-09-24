"use server";

import { createClient } from "@vercel/postgres";

// const TABLE_PREFIX = `${process.env.VERCEL_ENV}`

async function connect() {
  const client = createClient();
  await client.connect();
  return client;
}

export async function insertQuestions(questionData: {
  key: string;
  question: string;
  subTitle: string;
  placeholder: string;
  isRequired: boolean;
  questionType: string;
  // options: string[];
}) {
  const now = new Date().toDateString();

  // choices = '${choices}',
  // updated_at = '${now}'
  // console.log('relations: ', questionData.options);
  runQuery(`INSERT INTO shaadi_toast_questions(type, key, title, placeholder, is_required, sub_title) VAlUES(
    '${questionData.questionType}',
    '${questionData.key}',
    '${questionData.question}',
    '${questionData.placeholder}',
    '${questionData.isRequired}',
    '${questionData.subTitle}'
  );
  `, false);
}

export async function updateQuestions(questionData: {
  key: string;
  question: string;
  subTitle: string;
  placeholder: string;
  isRequired: boolean;
  questionType: string;
  // options: string[];
}) {
  const now = new Date().toDateString();

  // choices = '${choices}',
  // updated_at = '${now}'
  // console.log('relations: ', questionData.options);
  runQuery(`UPDATE shaadi_toast_questions SET
    type = '${questionData.questionType}',
    title = '${questionData.question}',
    placeholder = '${questionData.placeholder}',
    is_required = '${questionData.isRequired}',
    sub_title = '${questionData.subTitle}'
    WHERE key = '${questionData.key}';
  `, false);
}

export async function getQuestionByKey(key: string) {
  const query = `SELECT * FROM shaadi_toast_questions WHERE key = $1`;
  return runQuery(query, false, [key]);
}

async function runQuery(query: string, isInsert: boolean, values: any[] = []) {
  const client = await connect();
  try {
    const result = await client.query(query, values);
    if (isInsert) {
      return result.rows[0].id;
    } else {
      return result.rows;
    }
  } catch (error) {
    console.error(`Error running this query: ${query}`, error);
    return (isInsert) ? -1 : [];
  } finally {
    await client.end();
  }
}
