import { error } from '@sveltejs/kit';
import { posts, getPost } from '$lib/content/blog.js';

export function entries() {
  return posts.map(({ slug }) => ({ slug }));
}

export function load({ params }) {
  const found = getPost(params.slug);
  if (!found) error(404, 'Post not found');
  return found;
}
