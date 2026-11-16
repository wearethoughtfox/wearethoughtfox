import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // A Node server, the same as Root, so Coolify builds and runs both sites
    // one way. Every page is still prerendered (src/routes/+layout.js); the
    // server hands out those files and renders the 404 page.
    adapter: adapter({ precompress: true }),
    prerender: {
      handleHttpError: 'warn',
      entries: ['*', '/sitemap.xml', '/robots.txt', '/llms.txt']
    }
  }
};

export default config;
