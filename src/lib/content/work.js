import { parseFrontMatter, renderMarkdown, resolveDate, filenameSlug, cleanSlug } from './parse.js';

const files = import.meta.glob('./work/*.md', { query: '?raw', import: 'default', eager: true });

/** All projects in collection order (oldest first), as Jekyll ordered them */
export const work = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontMatter(raw);
    const date = resolveDate(data, path);
    const types = data.type || data.services || [];
    return {
      slug: data.slug ? cleanSlug(data.slug) : filenameSlug(path),
      title: data.title,
      date,
      year: date.getUTCFullYear(),
      excerpt: data.excerpt || '',
      image: data.image,
      featured: data.featured === true || data.featured === 'true',
      types: Array.isArray(types) ? types : [],
      html: renderMarkdown(body)
    };
  })
  .sort((a, b) => a.date - b.date);

export const workNewestFirst = [...work].reverse();

export const featuredWork = work.filter((w) => w.featured).reverse();

export function getWork(slug) {
  const i = work.findIndex((w) => w.slug === slug);
  if (i === -1) return null;
  return { item: work[i], prev: work[i - 1] || null, next: work[i + 1] || null };
}
