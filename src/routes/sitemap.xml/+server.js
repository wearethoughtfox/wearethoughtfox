import { sitemapXml } from '@thoughtfox/toolkit/seo';
import { site } from '$lib/content/site.js';
import { work } from '$lib/content/work.js';
import { posts, totalPages } from '$lib/content/blog.js';

export const prerender = true;

// lastmod only where the page has a real date (a project or a post); the
// index pages have none and say nothing.
export function GET() {
  const entries = [
    { path: '/', priority: 1 },
    { path: '/work/', priority: 0.9 },
    ...work.map((w) => ({ path: `/work/${w.slug}/`, lastmod: w.date, priority: 0.7 })),
    { path: '/blog/', priority: 0.8 },
    ...Array.from({ length: totalPages - 1 }, (_, i) => ({ path: `/blog/page/${i + 2}/`, priority: 0.4 })),
    ...posts.map((p) => ({ path: `/blog/${p.slug}/`, lastmod: p.dateISO, priority: 0.6 })),
    { path: '/info/', priority: 0.8 }
  ];

  return new Response(sitemapXml({ siteUrl: site.url, entries, trailingSlash: 'always' }), {
    headers: { 'Content-Type': 'application/xml' }
  });
}
