<script>
  import { page } from '$app/stores';
  import { site } from '$lib/content/site.js';

  /** @type {string|undefined} Page title (site name appended) */
  export let title = undefined;
  export let description = site.description;
  export let image = site.ogImage;
  /** @type {'website'|'article'} */
  export let type = 'website';
  /** @type {object|object[]|undefined} */
  export let jsonLd = undefined;
  export let noindex = false;

  $: fullTitle = title ? `${title} | ${site.name}` : `${site.homeTitle} | ${site.name}`;
  $: canonical = `${site.url}${$page.url.pathname}`;
  $: ogImage = image.startsWith('http') ? image : `${site.url}${image}`;
  $: ld = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
        .map((o) => JSON.stringify(o).replace(/</g, '\\u003c'))
        .map((json) => `<script type="application/ld+json">${json}<\/script>`)
        .join('\n')
    : '';
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
  {/if}
  <meta property="og:site_name" content={site.name} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={title ?? site.homeTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:locale" content="en_GB" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  {@html ld}
</svelte:head>
