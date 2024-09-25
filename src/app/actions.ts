"use server";

import { createClient } from "@vercel/postgres";

// const TABLE_PREFIX = `${process.env.VERCEL_ENV}`

async function connect() {
  const client = createClient();
  await client.connect();
  return client;
}

export async function insertQuestions(questionData: {
  id: number;
  key: string;
  question: string;
  subTitle: string;
  placeholder: string;
  isRequired: boolean;
  questionType: string;
  relations: string[] | null;
}) {

  const relationsString = questionData.relations ? `ARRAY[${questionData.relations.map(r => `'${r}'`).join(',')}]` : 'NULL';

  runQuery(`INSERT INTO shaadi_toast_questions(id, type, key, title, placeholder, is_required, sub_title, relations) VALUES(
    ${questionData.id},
    '${questionData.questionType}',
    '${questionData.key}',
    '${questionData.question}',
    '${questionData.placeholder}',
    '${questionData.isRequired}',
    '${questionData.subTitle}',
    ${relationsString}
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
  relations: string[];
}) {

  runQuery(`UPDATE shaadi_toast_questions SET
    type = '${questionData.questionType}',
    title = '${questionData.question}',
    placeholder = '${questionData.placeholder}',
    is_required = '${questionData.isRequired}',
    sub_title = '${questionData.subTitle}',
    relations = '${questionData.relations}'
    WHERE key = '${questionData.key}';
  `, false);
}

export async function getQuestionByKey(key: string) {
  const query = `SELECT * FROM shaadi_toast_questions WHERE key = $1`;
  return runQuery(query, false, [key]);
}

export async function deleteAllQuestions() {
  const query = `DELETE FROM shaadi_toast_questions`;
  return runQuery(query, false);
}

async function runQuery(query: string, isInsert: boolean, values: unknown[] = []) {
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
