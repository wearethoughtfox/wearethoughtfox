import { parseFrontMatter, renderMarkdown, resolveDate, filenameSlug, cleanSlug, longDate } from './parse.js';

const files = import.meta.glob('./blog/*.{md,markdown}', { query: '?raw', import: 'default', eager: true });

export const PER_PAGE = 5;

/** All posts in collection order (oldest first) */
export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontMatter(raw);
    const date = resolveDate(data, path);
    let slug;
    if (data.permalink) slug = cleanSlug(data.permalink);
    else if (data.slug) slug = cleanSlug(data.slug);
    else slug = filenameSlug(path);
    const html = renderMarkdown(body);
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return {
      slug,
      title: data.title,
      date,
      dateISO: date.toISOString().slice(0, 10),
      dateLong: longDate(date),
      excerpt: data.excerpt || text.slice(0, 160).replace(/\s\S*$/, '') + '…',
      tags: Array.isArray(data.tags) ? data.tags : [],
      html
    };
  })
  .sort((a, b) => a.date - b.date || a.slug.localeCompare(b.slug));

export const postsNewestFirst = [...posts].reverse();

export const totalPages = Math.ceil(posts.length / PER_PAGE);

export function getPage(n) {
  if (n < 1 || n > totalPages) return null;
  const start = (n - 1) * PER_PAGE;
  return {
    page: n,
    totalPages,
    posts: postsNewestFirst.slice(start, start + PER_PAGE),
    newer: n > 1 ? (n === 2 ? '/blog/' : `/blog/page/${n - 1}/`) : null,
    older: n < totalPages ? `/blog/page/${n + 1}/` : null
  };
}

export function getPost(slug) {
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return { post: posts[i], prev: posts[i - 1] || null, next: posts[i + 1] || null };
}
