import { robotsTxt } from '@thoughtfox/toolkit/seo';
import { site } from '$lib/content/site.js';

export const prerender = true;

export function GET() {
  return new Response(robotsTxt({ siteUrl: site.url }), {
    headers: { 'Content-Type': 'text/plain' }
  });
}
