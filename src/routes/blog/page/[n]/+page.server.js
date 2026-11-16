import { error } from '@sveltejs/kit';
import { getPage, totalPages } from '$lib/content/blog.js';

export function entries() {
  const out = [];
  for (let n = 2; n <= totalPages; n++) out.push({ n: String(n) });
  return out;
}

export function load({ params }) {
  const n = Number(params.n);
  const page = Number.isInteger(n) && n >= 2 ? getPage(n) : null;
  if (!page) error(404, 'Page not found');
  return page;
}
