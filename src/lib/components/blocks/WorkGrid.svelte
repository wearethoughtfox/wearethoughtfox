<script>
  import { reveal } from '$lib/actions/reveal.js';

  /** @type {Array<{slug:string,title:string,image:string,excerpt:string,year:number}>} */
  export let items = [];
  /** @type {'excerpt'|'year'} What to show under the title */
  export let meta = 'excerpt';
  /** @type {boolean} Animate items in as they scroll into view */
  export let animate = false;

  let shown = {};
</script>

<section class="work-grid" class:work-grid--index={meta === 'year'}>
  {#each items as item (item.slug)}
    <article
      class="work-grid__item"
      class:reveal={animate}
      class:is-revealed={!animate || shown[item.slug]}
      use:reveal
      on:reveal={() => (shown[item.slug] = true)}
    >
      <a href="/work/{item.slug}/" class="work-grid__media dim" aria-hidden="true" tabindex="-1">
        <img src={item.image} alt="" loading="lazy" decoding="async" width="500" height="500" />
      </a>
      <a href="/work/{item.slug}/" class="work-grid__title-link link dim">
        <h3 class="work-grid__title ttu tracked">{item.title}</h3>
      </a>
      {#if meta === 'year'}
        <p class="work-grid__year">{item.year}</p>
      {:else}
        <p class="work-grid__excerpt">{item.excerpt}</p>
      {/if}
    </article>
  {/each}
</section>

<style>
  .work-grid {
    display: grid;
    grid-template-columns: 1fr;
    padding-inline: 1rem;
    padding-block-end: 4rem;
    margin-inline: auto;
  }

  .work-grid--index {
    padding-block: 1rem 0;
  }

  .work-grid__media {
    display: block;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: var(--color-grey);
  }

  .work-grid__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .work-grid__title-link {
    display: block;
    padding-block-end: 0.5rem;
  }

  .work-grid__title {
    font-size: var(--size-f5);
    font-weight: 400;
    margin-block-end: 0;
  }

  .work-grid__excerpt {
    color: var(--color-mid-gray);
    padding-block-end: 1rem;
  }

  .work-grid__year {
    font-size: var(--size-f6);
    font-weight: 400;
    margin-block-start: 0.5rem;
    color: var(--color-mid-gray);
    padding-block-end: 1rem;
  }

  .work-grid--index .work-grid__item {
    padding-block-end: 1rem;
  }

  @media screen and (min-width: 30em) {
    .work-grid {
      padding-inline: 2rem;
    }

    .work-grid__item {
      padding: 1rem;
    }
  }

  @media screen and (min-width: 50em) {
    .work-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .work-grid--index {
      padding-block-end: 4rem;
    }

    .work-grid--index .work-grid__item {
      padding-block-end: 0;
    }
  }
</style>
