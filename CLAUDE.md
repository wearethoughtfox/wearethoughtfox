# We Are Thought Fox site — working notes

Company site for We Are Thought Fox (Rob's studio). Port of the Jekyll/Tachyons site with the design deliberately unchanged. See README.md.

Project-specific rules:
- Do not restyle. Colours, type scale, spacing and breakpoints (30em, 50em) mirror the old Tachyons build; tokens are fixed values, not fluid.
- Blog and work content are the original Markdown files in `src/lib/content/`; edit content there, never in routes.
- URLs keep trailing slashes (`trailingSlash: 'always'` in `src/routes/+layout.js`) and existing slugs must not change.
- Every page renders `<Seo>`; index pages carry ItemList/Blog JSON-LD.
- Motion (typed headline, reveals, bounce) must stay gated on `prefers-reduced-motion`.

# The toolkit

This site takes its shared foundations from `@thoughtfox/toolkit`
(github:wearethoughtfox/toolkit) rather than keeping its own copies. Work on
anything shared happens in the toolkit repo; this site gets it by bumping the
pinned tag in `package.json` and checking the result with a snapshot
comparison. Nothing updates on its own.

What comes from the toolkit:

| Piece | Import |
|---|---|
| Reset | `@thoughtfox/toolkit/layout/reset.css` |
| `.region`, `.visually-hidden` | `@thoughtfox/toolkit/layout/utilities/*.css` |
| Head tags (title, canonical, OG, Twitter, JSON-LD) | `@thoughtfox/toolkit/seo/Head.svelte` |
| `sitemapXml`, `robotsTxt`, `llmsTxt` | `@thoughtfox/toolkit/seo` |
| Token generator and its Vite plugin | `@thoughtfox/toolkit/tokens/*` |

The Every Layout compositions (`.stack`, `.cluster`, `.grid` and the rest)
are in the toolkit too, but this site does not use any of them — the ported
Tachyons design has its own layout CSS — so it does not import them. If a
composition is ever wanted here, import that one file in `src/app.css`.

## Where CSS lives

| Layer | Location | Rule |
|---|---|---|
| Reset | toolkit (`layout/reset.css`) | Global, never override |
| Tokens (generated) | `src/lib/css/global/_tokens.generated.css` | Never edit — run `npm run tokens` |
| Variables | `src/lib/css/global/variables.css` | Manual additions on top of tokens |
| Global styles | `src/lib/css/global/global-styles.css` | Low-specificity, element selectors |
| Utilities | toolkit, plus `src/lib/css/utilities/*.css` | Single-purpose classes |
| Blocks | Scoped `<style>` in `.svelte` files | Component-specific styles |

The import order is set in `src/app.css`.

## Design tokens

Edit the JSON in `src/lib/design-tokens/`. `npm run dev` regenerates on save
(the toolkit's `tokensPlugin()` in `vite.config.js`), and `npm run tokens`
does it once:

```
npm run tokens
```

This writes `_tokens.generated.css` with the `--color-*`, `--space-*`,
`--size-step-*`, `--leading-*` and `--font-*` custom properties.

Token files: `colors.json`, `spacing.json`, `text-sizes.json`,
`text-leading.json`, `text-weights.json`, `fonts.json`, `viewports.json`.

## Accessibility conventions

- `SkipLink` is the first element in `+layout.svelte`
- Every `<nav>` has a unique `aria-label`
- Focus moves to `<h1>` on route change (`afterNavigate` in `+layout.svelte`).
  The toolkit's `focusHeading()` does the same thing but does not scroll and
  skips hash links, so swapping to it is a behaviour change — test navigation
  in a browser before taking it.
- `<ul>` and `<ol>` with list styles removed use `role="list"`
- Interactive elements are always `<button>` (action) or `<a>` (navigation) — never divs
- Colour contrast: minimum 4.5:1 for body text

## Animations

- Gate CSS transitions inside `@media (prefers-reduced-motion: no-preference)` blocks in scoped styles
- The `reveal` action (`src/lib/actions/reveal.js`) pairs with `src/lib/css/utilities/reveal.css` for scroll-triggered reveals; `typed.js` is the headline
- There is no `prefersReducedMotion` store on this site; the gating is in CSS
