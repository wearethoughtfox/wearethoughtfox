import { getPage } from '$lib/content/blog.js';

export function load() {
  return getPage(1);
}
