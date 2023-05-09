import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ params, fetch }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  if (response.status === 404) {
    throw error(404, {
      message: 'Not found'
    });
  }
  const user = response.json();
  return {
    user
  };
}) satisfies PageServerLoad;
