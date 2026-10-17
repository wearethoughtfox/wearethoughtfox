# We Are Thought Fox website

SvelteKit port of the 2017–2020 Jekyll/Tachyons site for [wearethoughtfox.com](https://www.wearethoughtfox.com), built on the `sveltekit-cube-starter`. The design is unchanged: same palette, system font stack, 18px root, Tachyons type scale and layouts.

## Run

```
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in ./build
npm run preview
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

## URLs

All URLs keep trailing slashes and match the old site: `/`, `/work/`, `/work/<slug>/`, `/blog/`, `/blog/page/N/` (5 posts per page), `/blog/<slug>/`, `/info/`, `/sitemap.xml`. `robots.txt` and `llms.txt` are new.

## Behaviour carried over

- Typewriter headline on the home page (`src/lib/actions/typed.js` replaces typed.js), then the arrow bounces.
- Scroll-in reveals replace AOS (`reveal` action + `utilities/reveal.css`).
- Back-to-top arrow appears when the footer is in view.
- Left/right arrow keys move between projects and between posts.
- Everything animated is gated on `prefers-reduced-motion`.

## Not carried over

- Netlify CMS admin (`/admin/`) and the Netlify Identity widget.
- The service worker.
- Google Analytics / Drift chat (neither was wired up in the source).

## Deploy

`@sveltejs/adapter-static` writes a fully prerendered site to `build/` with `404.html` as fallback. Publish `build/` on Netlify or any static host.
