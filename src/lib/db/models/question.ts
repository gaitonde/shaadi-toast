import { sql } from '@vercel/postgres';

export interface Question {
  type: string;
  key: string;
  title: string;
  isRequired: boolean;
  placeholder?: string;
  relations?: string[];
  subTitle?: string;
}

export async function createQuestionsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS shaadi_toast_questions (
      id SERIAL PRIMARY KEY,
      type VARCHAR(255) NOT NULL,
      key VARCHAR(255) NOT NULL,
      title TEXT NOT NULL,
      placeholder TEXT,
      is_required BOOLEAN DEFAULT false,
      relations TEXT[],
      sub_title TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

export async function addQuestion(type: string, key: string, title: string, placeholder: string, is_required: boolean, relations: string[], sub_title: string): Promise<Question> {
  const result = await sql`
    INSERT INTO shaadi_toast_questions (type, key, title, placeholder, is_required, relations, sub_title)
    VALUES (
      ${type},
      ${key},
      ${title},
      ${placeholder},
      ${is_required},
      ${type === 'input' ? null : JSON.stringify(relations)},
      ${sub_title}
    )
    RETURNING id, type, key, title, placeholder, is_required, relations, sub_title, created_at as createdAt
  `;
  return result.rows[0] as Question;
}

export async function getQuestions(): Promise<Question[]> {
  const result = await sql`
    SELECT id, type, key, title, placeholder, is_required as "isRequired", relations, sub_title as "subTitle", created_at
    FROM shaadi_toast_questions
    ORDER BY id ASC
  `;
  return result.rows as Question[];
}