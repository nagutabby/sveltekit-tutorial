import { json } from '@sveltejs/kit';
import { prisma } from '../../../lib/db';
import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
  const { name } = await request.json();
  const todo = await prisma.todo.create({
    data: {
      name
    }
  });

  return json(todo);
}) satisfies RequestHandler;

export function GET() {
  throw new Error('エラー発生！');
  const number = Math.floor(Math.random() * 6) + 1;

  return json(number);
}
