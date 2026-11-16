import { workNewestFirst } from '$lib/content/work.js';
import { workCard } from '$lib/content/work-card.js';

// Content is read on the server so the Markdown, and the libraries that
// parse it, stay out of the browser's JavaScript.
export function load() {
  return { work: workNewestFirst.map(workCard) };
}
