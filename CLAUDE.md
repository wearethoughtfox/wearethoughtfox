# We Are Thought Fox site — working notes

Company site for We Are Thought Fox (Rob's studio). Port of the Jekyll/Tachyons site with the design deliberately unchanged. See README.md.

Project-specific rules:
- Do not restyle. Colours, type scale, spacing and breakpoints (30em, 50em) mirror the old Tachyons build; tokens are fixed values, not fluid.
- Blog and work content are the original Markdown files in `src/lib/content/`; edit content there, never in routes.
- URLs keep trailing slashes (`trailingSlash: 'always'`) and existing slugs must not change.
- Every page renders `<Seo>`; index pages carry ItemList/Blog JSON-LD.
- Motion (typed headline, reveals, bounce) must stay gated on `prefers-reduced-motion`.

# CSS Methodology (inherited from the starter)

This project uses **CUBE CSS** (Composition Utility Block Exception) with **Every Layout** primitives and a **fluid design token** system.

## Architecture

### Where CSS lives

| Layer | Location | Rule |
|---|---|---|
| Reset | `@thoughtfox/toolkit/layout/reset.css` (shared) | Global, never override |
| Tokens (generated) | `src/lib/css/global/_tokens.generated.css` | Never edit — run `npm run tokens` |
| Variables | `src/lib/css/global/variables.css` | Manual additions on top of tokens |
| Global styles | `src/lib/css/global/global-styles.css` | Low-specificity, element selectors |
| Compositions | `@thoughtfox/toolkit/layout/compositions/*.css`; `sidebar`, `grid` and `reel` stay in `src/lib/css/compositions/` (see README) | Every Layout patterns — plain class names |
| Utilities | `region` and `visually-hidden` from `@thoughtfox/toolkit/layout/utilities/`; `text` and `reveal` in `src/lib/css/utilities/` | Single-purpose classes |
| Blocks | Scoped `<style>` in `.svelte` files | Component-specific styles |

### CUBE layers summary

- **C — Composition**: layout primitives (`.stack`, `.cluster`, `.grid`, `.sidebar`, `.switcher`, `.cover`, `.reel`, `.frame`, `.wrapper`, `.repel`)
- **U — Utility**: single-purpose helpers (`.region`, `.visually-hidden`, `.font-bold`, `.leading-loose`, `.uppercase`)
- **B — Block**: component styles scoped inside Svelte files (`Button.svelte`, `Card.svelte`, etc.)
- **E — Exception**: data-attribute modifiers (`.grid[data-layout="50-50"]`, `.sidebar[data-reversed]`)

## Design Tokens

Edit JSON files in `src/lib/design-tokens/`, then regenerate:

```
npm run tokens
```

This writes `_tokens.generated.css` with all `--color-*`, `--space-*`, `--size-step-*`, `--leading-*`, `--font-*` custom properties.

Token files:
- `colors.json` — palette
- `spacing.json` — fluid spacing scale (min/max px → clamp())
- `text-sizes.json` — fluid type scale
- `text-leading.json` — line-height values
- `text-weights.json` — font-weight values
- `fonts.json` — font stacks
- `viewports.json` — min/max viewport for clamp() calculations

## Every Layout Compositions

Each layout pattern is both:
1. A plain CSS class — use directly in markup: `<div class="cluster">`
2. A Svelte component from `@thoughtfox/toolkit/layout` — use for prop-based configuration: `<Cluster gap="var(--space-l)">`

The components set CSS custom properties via `style:--prop={value}`. The CSS class defines the behaviour; the custom property overrides the default.

### Composition reference

| Component | Class | Key prop | Custom property |
|---|---|---|---|
| `Stack` | `.stack` | `space` | `--stack-space` |
| `Cluster` | `.cluster` | `gap` | `--gutter` |
| `Sidebar` | `.sidebar` | `sideWidth`, `contentMin` | `--sidebar-target-width` |
| `Grid` | `.grid` | `minItemSize` | `--grid-min-item-size` |
| `Switcher` | `.switcher` | `threshold` | `--switcher-target-container-width` |
| `Cover` | `.cover` | `minHeight` | `--cover-min-height` |
| `Reel` | `.reel` | `itemWidth` | `--reel-item-width` |
| `Frame` | `.frame` | `ratio` | `--frame-ratio` |
| `Wrapper` | `.wrapper` | `maxWidth` | `--wrapper-max-width` |
| `Region` | `.region` | `space` | `--region-space` |
| `Repel` | `.repel` | — | `--repel-vertical-alignment` |

## Accessibility conventions

- `SkipLink` is the first element in `+layout.svelte`
- Every `<nav>` has a unique `aria-label`
- Focus moves to `<h1>` on route change (via `afterNavigate` in `+layout.svelte`)
- `<ul>` and `<ol>` with list styles removed use `role="list"`
- Interactive elements are always `<button>` (action) or `<a>` (navigation) — never divs
- Color contrast: minimum 4.5:1 for body text

## Animations

- Import `prefersReducedMotion` from `@thoughtfox/toolkit/motion/reduced-motion.js` to gate Svelte transitions
- CSS transitions go inside `@media (prefers-reduced-motion: no-preference)` blocks in scoped styles
- Use the `reveal` action from `$lib/actions/reveal.js` for scroll-triggered reveals paired with CSS animations

## Starting a new project

1. Clone this repo
2. Edit `src/lib/design-tokens/colors.json` and `fonts.json`
3. Add woff2 font files to `src/fonts/`
4. Uncomment and update the `@font-face` rules in `src/lib/css/global/fonts.css`
5. Uncomment the `<link rel="preload">` in `src/app.html`
6. Run `npm run tokens`
7. Delete demo content in `src/routes/+page.svelte`
8. Update site name and nav links in `src/routes/+layout.svelte`
9. Run `npm run dev`
