import { site } from '$lib/content/site.js';
import { work } from '$lib/content/work.js';
import { posts, totalPages } from '$lib/content/blog.js';

export const prerender = true;

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: '/', lastmod: today, priority: '1.0' },
    { loc: '/work/', lastmod: today, priority: '0.9' },
    ...work.map((w) => ({ loc: `/work/${w.slug}/`, lastmod: w.date.toISOString().slice(0, 10), priority: '0.7' })),
    { loc: '/blog/', lastmod: today, priority: '0.8' },
    ...Array.from({ length: totalPages - 1 }, (_, i) => ({ loc: `/blog/page/${i + 2}/`, lastmod: today, priority: '0.4' })),
    ...posts.map((p) => ({ loc: `/blog/${p.slug}/`, lastmod: p.dateISO, priority: '0.6' })),
    { loc: '/info/', lastmod: today, priority: '0.8' }
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${site.url}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
