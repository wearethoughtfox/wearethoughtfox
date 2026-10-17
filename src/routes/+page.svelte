<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageBanner from '$lib/components/blocks/PageBanner.svelte';
  import WorkGrid from '$lib/components/blocks/WorkGrid.svelte';
  import ContactBand from '$lib/components/blocks/ContactBand.svelte';
  import { typed } from '$lib/actions/typed.js';
  import { reveal } from '$lib/actions/reveal.js';
  import { site, organizationSchema } from '$lib/content/site.js';
  import { featuredWork } from '$lib/content/work.js';

  let bounce = false;
  let statementShown = false;
  let clientsShown = false;
</script>

<Seo
  description={site.description}
  jsonLd={[
    organizationSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: site.url,
      name: site.name,
      publisher: { '@id': `${site.url}/#organization` }
    }
  ]}
/>

<PageBanner>
  <div class="hero">
    <h2 class="hero__intro"><span class="primary">We Are Thought Fox</span> is a design and development studio</h2>
    <h1 class="hero__title">
      Making the web
      <span
        class="hero__typed primary"
        aria-hidden="true"
        use:typed={{ words: site.typedWords }}
        on:typed:complete={() => (bounce = true)}
      ></span>
      <span class="visually-hidden">{site.typedWords.join(', ')}</span>
    </h1>
  </div>
  <div class="hero__arrow" class:bounce>
    <a href="#section2">
      <span class="visually-hidden">Go to section two</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="20" viewBox="0 0 34 20" aria-hidden="true"><path d="M20.1,16.3c-0.3,0-0.6-0.1-0.8-0.3L6.4,6.8C5.8,6.4,5.6,5.5,6.1,4.9C6.5,4.3,7.4,4.1,8,4.6l12.1,8.7l12.1-8.7 c0.6-0.4,1.5-0.3,1.9,0.3c0.4,0.6,0.3,1.5-0.3,1.9l-12.9,9.3C20.6,16.2,20.4,16.3,20.1,16.3z"></path></svg>
    </a>
  </div>
</PageBanner>

<section id="section2">
  <div class="statement reveal" class:is-revealed={statementShown} use:reveal on:reveal={() => (statementShown = true)}>
    <h2 class="statement__text measure">We <span class="primary">bring ideas to life</span> on the web through research, design, making and storytelling. Take a look.</h2>
  </div>
</section>

<WorkGrid items={featuredWork} meta="excerpt" animate />

<section id="sectors" class="clients">
  <div class="clients__inner">
    <h2 class="clients__title reveal" class:is-revealed={clientsShown} use:reveal on:reveal={() => (clientsShown = true)}>We’ve worked with</h2>
    <ul role="list" class="clients__list">
      {#each site.clients as client}
        <li class="clients__item mid-gray">{client}</li>
      {/each}
    </ul>
  </div>
</section>

<ContactBand />

<style>
  /* ---- Hero ---- */
  :global(.banner:has(.hero)) {
    min-height: 26rem;
  }

  .hero__intro {
    font-size: var(--size-f4);
    font-weight: 600;
    color: var(--color-secondary);
  }

  .hero__title {
    font-size: var(--size-f1);
    margin-block-start: 0;
    color: var(--color-secondary);
  }

  .hero__typed {
    display: block;
    min-height: 1.25em;
  }

  .hero__arrow {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1rem;
    width: 2rem;
    height: 2rem;
    margin-inline: auto;
  }

  .hero__arrow a {
    display: block;
    fill: var(--color-white);
    line-height: 0;
  }

  .hero__arrow svg {
    width: 2rem;
    height: auto;
  }

  @media screen and (min-width: 50em) {
    :global(.banner:has(.hero)) {
      min-height: 32rem;
    }

    .hero__intro {
      font-size: var(--size-f3);
    }

    .hero__title,
    .hero__typed {
      font-size: var(--size-headline);
    }

    .hero__arrow {
      bottom: 2rem;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .bounce {
      animation: bounce 2s forwards 1;
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-30px); }
      60% { transform: translateY(-15px); }
    }
  }

  /* ---- Statement ---- */
  .statement {
    margin-inline: auto;
    padding: 2rem 1rem;
  }

  .statement__text {
    font-size: var(--size-f4);
    font-weight: 400;
    color: var(--color-secondary);
  }

  @media screen and (min-width: 30em) {
    .statement {
      padding-inline: 2rem;
    }
  }

  @media screen and (min-width: 50em) {
    .statement {
      padding-block: 4rem;
    }

    .statement__text {
      font-size: var(--size-f2);
    }
  }

  /* ---- Clients ---- */
  .clients {
    border-block-start: var(--stroke);
    padding-block: 2rem;
  }

  .clients__inner {
    max-width: 96rem;
    margin-inline: auto;
    padding-inline: 1rem;
  }

  .clients__title {
    margin-block: 2rem 1rem;
    font-size: var(--size-f1);
    color: var(--color-secondary);
  }

  .clients__list {
    display: grid;
    grid-template-columns: 1fr;
    font-size: var(--size-f4);
    line-height: 1.5;
    column-gap: 1rem;
  }

  .clients__item:nth-child(5n + 1) {
    margin-block-start: 2rem;
  }

  .clients__item:first-child {
    margin-block-start: 0;
  }

  @media screen and (min-width: 30em) {
    .clients__title {
      margin-block-end: 4rem;
    }

    .clients__list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 50em) {
    .clients {
      padding-block-start: 0;
    }

    .clients__inner {
      padding-inline: 2rem;
      padding-block-end: 4rem;
    }

    .clients__list {
      grid-template-columns: repeat(5, 1fr);
      column-gap: 4rem;
    }

    .clients__item:nth-child(5n + 1) {
      margin-block-start: 0;
    }

    .clients__item:nth-child(n + 6) {
      margin-block-start: 2rem;
    }
  }
</style>
