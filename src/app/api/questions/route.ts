import { NextResponse } from 'next/server';

import { createQuestionsTable, getQuestions, addQuestion, Question } from '@/lib/db/models/question';

export async function GET() {
      const questions = await getQuestions();
      return NextResponse.json({ questions });
}

export async function POST(request: Request) {
  await createQuestionsTable();

  try {
    const requestData = await request.json();
    const { type, key, title, placeholder, is_required, relations, subTitle } = requestData;

    // Validate required fields
    if (!type || !key || !title) {
      return NextResponse.json(
        { error: 'Missing required fields: type, key, and title' },
        { status: 400 }
      );
    }

    // Ensure relations is an array and convert empty array to null
    const formattedRelations = Array.isArray(relations) && relations.length > 0 ? relations : null;

    // Prepare question object for insertion
    const newQuestion: Omit<Question, 'id' | 'createdAt'> = {
      type,
      key,
      title,
      placeholder: placeholder || null,
      isRequired: is_required || false,
      relations: formattedRelations || undefined,
      subTitle: subTitle || null,
    };

    const addedQuestion = await addQuestion(
      newQuestion.type,
      newQuestion.key,
      newQuestion.title,
      newQuestion.placeholder || '',
      newQuestion.isRequired || false,
      newQuestion.relations ? newQuestion.relations : [],
      newQuestion.subTitle || ''
    );

    return NextResponse.json({ question: addedQuestion }, { status: 201 });
  } catch (error) {
    console.error('Error adding question:', error);
    return NextResponse.json(
      { error: 'An error occurred while adding the question' },
      { status: 500 }
    );
  }
}