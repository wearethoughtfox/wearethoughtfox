import { llmsTxt } from '@thoughtfox/toolkit/seo';
import { site } from '$lib/content/site.js';
import { workNewestFirst } from '$lib/content/work.js';
import { postsNewestFirst } from '$lib/content/blog.js';

export const prerender = true;

export function GET() {
  const body = llmsTxt({
    siteUrl: site.url,
    name: site.name,
    summary: site.description,
    intro: `${site.name} is a design and development studio. We bring ideas to life on the web through research, design, making and storytelling. Clients have included ${site.clients.join(', ')}.`,
    sections: [
      {
        title: 'How we can help',
        items: [
          {
            title: 'Info',
            path: '/info/',
            description: 'Engage your users with delightful stories; develop new story formats and tools; make your big project focus on user needs.'
          }
        ]
      },
      {
        title: 'Work',
        items: workNewestFirst.map((w) => ({
          title: w.title,
          path: `/work/${w.slug}/`,
          description: `${w.excerpt} (${w.year})`
        }))
      },
      {
        title: 'Blog',
        items: postsNewestFirst.map((p) => ({ title: p.title, path: `/blog/${p.slug}/`, description: p.dateLong }))
      },
      { title: 'Contact', items: [{ text: `Email: ${site.email}` }] }
    ]
  });
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
