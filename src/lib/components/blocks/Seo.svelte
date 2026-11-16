<script>
  // The head tags come from the toolkit. This keeps the site's own policy:
  // URLs end in a slash, and the share card is the small one.
  import Head from '@thoughtfox/toolkit/seo/Head.svelte';
  import { site } from '$lib/content/site.js';

  /** title, description, image, type, jsonLd, noindex: see buildHead() in the toolkit */
  let props = $props();
</script>

<Head {site} trailingSlash="always" twitterCard="summary" {...props} />
