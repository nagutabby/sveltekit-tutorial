import type { PageServerLoad } from './$types';

export const prerender = true;

export const csr = false;

export const load = (async ({ fetch }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    users
  };
}) satisfies PageServerLoad;
