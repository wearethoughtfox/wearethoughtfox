# We Are Thought Fox website

SvelteKit port of the 2017–2020 Jekyll/Tachyons site for [wearethoughtfox.com](https://www.wearethoughtfox.com), built on the `sveltekit-cube-starter`. The design is unchanged: same palette, system font stack, 18px root, Tachyons type scale and layouts.

## Run

```
npm install
npm run dev        # http://localhost:5173
npm run build      # prerendered pages and a Node server in ./build
npm run preview
npm start          # run the built server, as Coolify does
```

## Content

Content is the original Markdown, untouched, read at build time with `import.meta.glob` and rendered with `marked`.

| What | Where |
|---|---|
| Site facts (name, email, nav, client list, typed words) | `src/lib/content/site.js` |
| Work (15 projects, Markdown + front matter) | `src/lib/content/work/*.md` |
| Blog (32 posts, Markdown + front matter) | `src/lib/content/blog/*.md` |
| Front matter and Markdown parsing | `src/lib/content/parse.js` |
| Work and blog loaders (ordering, prev/next, pagination) | `src/lib/content/work.js`, `blog.js` |
| Info page copy | `src/routes/info/+page.svelte` |
| Palette and type scale | `src/lib/design-tokens/*.json` then `npm run tokens` |

To add a post or project, drop a Markdown file in the relevant folder with the same front matter as its neighbours. The date comes from `date:` in front matter or the filename prefix. URLs follow Jekyll: `/blog/<permalink or slug>/`, `/work/<slug>/`.

## Shared toolkit

The brand-agnostic parts come from [`@thoughtfox/toolkit`](https://github.com/wearethoughtfox/toolkit), pinned by tag in `package.json`. To upgrade, bump the tag, run `npm install`, build, and compare the snapshots.

| From the toolkit | Still in this repo, and why |
|---|---|
| `layout/reset.css` | |
| `layout/utilities/` region, visually-hidden | `utilities/text.css`, `utilities/reveal.css`: this site's own Tachyons helpers and AOS-style reveal, not the toolkit's |
| `seo/` head tags, sitemap, robots.txt, llms.txt | `blocks/Seo.svelte`: a thin wrapper that fills in this site's defaults |
| `tokens/` generator and its Vite plugin | |
| | `blocks/SkipLink.svelte`: uses this site's `--color-primary` / `--color-dark` |
| | `actions/reveal.js`: fires a `reveal` event, which the toolkit's version does not |

The toolkit's Every Layout compositions and layout components are not imported. The ported Tachyons design has its own layout CSS and uses none of them. `CLAUDE.md` has the detail.

## URLs

All URLs keep trailing slashes and match the old site: `/`, `/work/`, `/work/<slug>/`, `/blog/`, `/blog/page/N/` (5 posts per page), `/blog/<slug>/`, `/info/`, `/sitemap.xml`. `robots.txt` and `llms.txt` are new.

## Behaviour carried over

- Typewriter headline on the home page (`src/lib/actions/typed.js` replaces typed.js), then the arrow bounces.
- Scroll-in reveals replace AOS (`reveal` action + `utilities/reveal.css`).
- Back-to-top arrow appears when the footer is in view.
- Left/right arrow keys move between projects and between posts.
- Everything animated is gated on `prefers-reduced-motion`.

## Not carried over

- Netlify CMS and the Netlify Identity widget. `/admin/` is now Sveltia CMS (see below).
- The service worker.
- Google Analytics / Drift chat (neither was wired up in the source).

## Deploy

The site follows Root's setup (`wearethoughtfox/root`): Coolify builds it and runs `npm start`, behind a Cloudflare Tunnel.

- `@sveltejs/adapter-node` builds a Node server. Every page is still prerendered; the server hands out those files and renders the 404 page.
- `.github/workflows/deploy.yml` deploys each push to `main`. It needs `APP_UUID` and `SITE_URL` filled in and three repository secrets, listed at the top of the file.
- Node is pinned in `package.json` (`engines`), the same version as Root.

## Editing content

`/admin/` is Sveltia CMS (`static/admin/`). It edits the Markdown in `src/lib/content/blog` and `src/lib/content/work`, and a save commits straight to `main`, which deploys.

- Sign-in goes through the Cloudflare Worker Root uses. Its `ALLOWED_DOMAINS` must include this site's address.
- Every front matter key is declared in `static/admin/config.yml`, most of them hidden. A key missing from the config is dropped when an entry is saved, so add new keys there first.
- Content is read on the server (`+page.server.js`), so the Markdown and its parsers are not sent to the browser.
