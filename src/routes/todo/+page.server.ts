import type { PageServerLoad, Actions, } from './$types';
import { prisma } from '../../lib/db';
import { fail } from '@sveltejs/kit';
import { z, ZodError } from "zod"

const TodoSchema = z.object({
  name: z.string().min(3, { message: '3文字以上入力してください。' })
});

export const actions = {
  create: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    try {
      const result = await TodoSchema.parse(formData);
      const { name } = result;
      await prisma.todo.create({
        data: {
          name
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const { fieldErrors: errors } = error.flatten();
        const { name } = formData;
        return fail(400, { name, errors });
      }
    }
  },
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = Number(data.get('id'));
    await prisma.todo.delete({
      where: {
        id
      }
    });
  }
} satisfies Actions;

export const load = (async () => {
  const todos = await prisma.todo.findMany();
  return {
    todos
  };
}) satisfies PageServerLoad;
