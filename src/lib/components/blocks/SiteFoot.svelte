<script>
  import { onMount } from 'svelte';
  import { site } from '$lib/content/site.js';

  let footer;
  let showTop = false;

  onMount(() => {
    if (!('IntersectionObserver' in window)) {
      showTop = true;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (showTop = e.isIntersecting)),
      { threshold: 0.05 }
    );
    io.observe(footer);
    return () => io.disconnect();
  });
</script>

<footer class="site-foot" bind:this={footer}>
  <div class="site-foot__inner">
    <img class="site-foot__logo" src="/images/logo.png" alt={site.name} width="210" height="190" />
    <p class="site-foot__legal">{site.footer}</p>
    <p class="site-foot__legal site-foot__legal--last"><a class="dim" href="/sitemap.xml">Sitemap</a></p>
  </div>
</footer>

<a href="#top" class="back-to-top reveal" data-reveal="left" class:is-revealed={showTop} aria-hidden={!showTop} tabindex={showTop ? 0 : -1}>
  <img src="/images/arrow.svg" alt="Scroll to top" width="32" height="32" />
</a>

<style>
  .site-foot {
    background: var(--color-secondary);
    padding-block: 0.5rem;
    margin-block-start: auto;
  }

  .site-foot__inner {
    border-block-start: 1px solid var(--color-grey);
    padding: 2rem 0.5rem 0;
  }

  .site-foot__logo {
    max-width: 12rem;
    display: block;
  }

  .site-foot__legal {
    font-size: var(--size-f6);
    color: var(--color-light-silver);
    padding-inline: 1rem;
  }

  .site-foot__legal a {
    color: inherit;
  }

  .site-foot__legal--last {
    padding-block-end: 4rem;
  }

  @media screen and (min-width: 50em) {
    .site-foot {
      padding-block-end: 4rem;
    }

    .site-foot__logo {
      margin-block-start: 0.5rem;
    }
  }

  .back-to-top {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: block;
    line-height: 0;
  }

  .back-to-top img {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (min-width: 50em) {
    .back-to-top img {
      width: 4rem;
      height: 4rem;
    }
  }

  /* Hidden until the footer is in view, even without motion preferences */
  .back-to-top:not(.is-revealed) {
    opacity: 0;
    pointer-events: none;
  }
</style>
