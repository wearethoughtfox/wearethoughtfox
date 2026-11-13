import { error } from '@sveltejs/kit';
import { work, getWork } from '$lib/content/work.js';

export function entries() {
  return work.map(({ slug }) => ({ slug }));
}

export function load({ params }) {
  const found = getWork(params.slug);
  if (!found) error(404, 'Project not found');
  return found;
}
