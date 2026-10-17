<script>
  import '../app.css';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  import SkipLink from '$lib/components/blocks/SkipLink.svelte';
  import SiteHead from '$lib/components/blocks/SiteHead.svelte';
  import SiteFoot from '$lib/components/blocks/SiteFoot.svelte';

  onMount(() => {
    afterNavigate(({ from }) => {
      if (!from) return;
      const heading = document.querySelector('main h1');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: false });
      }
    });
  });
</script>

<SkipLink />
<span id="top"></span>

<main id="main-content" tabindex="-1">
  <SiteHead />
  <slot />
</main>

<SiteFoot />

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  main:focus {
    outline: none;
  }
</style>
