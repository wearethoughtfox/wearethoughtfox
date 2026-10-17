import { site } from '$lib/content/site.js';
import { workNewestFirst } from '$lib/content/work.js';
import { postsNewestFirst } from '$lib/content/blog.js';

export const prerender = true;

export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} is a design and development studio. We bring ideas to life on the web through research, design, making and storytelling. Clients have included ${site.clients.join(', ')}.

## How we can help
- [Info](${site.url}/info/): Engage your users with delightful stories; develop new story formats and tools; make your big project focus on user needs.

## Work
${workNewestFirst.map((w) => `- [${w.title}](${site.url}/work/${w.slug}/): ${w.excerpt} (${w.year})`).join('\n')}

## Blog
${postsNewestFirst.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}/): ${p.dateLong}`).join('\n')}

## Contact
- Email: ${site.email}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
