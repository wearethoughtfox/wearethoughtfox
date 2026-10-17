<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  /** @type {{href:string,title:string}|null} */
  export let prev = null;
  /** @type {{href:string,title:string}|null} */
  export let next = null;
  /** @type {'work'|'blog'} Visual style */
  export let variant = 'work';

  // Left/right arrow keys move between items, as on the old site
  onMount(() => {
    const onKey = (e) => {
      if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
      if (e.key === 'ArrowLeft' && prev) goto(prev.href);
      if (e.key === 'ArrowRight' && next) goto(next.href);
    };
    document.addEventListener('keyup', onKey);
    return () => document.removeEventListener('keyup', onKey);
  });
</script>

<nav class="prev-next" data-variant={variant} aria-label="Previous and next">
  {#if variant === 'work'}
    {#if prev}
      <div class="prev-next__cell tc">
        <h3 class="prev-next__label ttu tracked">Previous project</h3>
        <a href={prev.href} class="secondary dim">{prev.title}</a>
      </div>
    {/if}
    {#if next}
      <div class="prev-next__cell tc">
        <h3 class="prev-next__label ttu tracked">Next project</h3>
        <a href={next.href} class="secondary dim">{next.title}</a>
      </div>
    {/if}
  {:else}
    <div class="prev-next__cell">
      {#if prev}<a href={prev.href} class="prev-next__blog-link dim" rel="prev">↫ Previous</a>{/if}
    </div>
    <div class="prev-next__cell tr">
      {#if next}<a href={next.href} class="prev-next__blog-link dim" rel="next">Next ↬</a>{/if}
    </div>
  {/if}
</nav>

<style>
  .prev-next {
    display: flex;
    border-block-start: var(--stroke);
  }

  .prev-next[data-variant='work'] {
    max-width: 16rem;
    margin-inline: auto;
    padding: 1rem;
  }

  .prev-next[data-variant='blog'] {
    padding-block: 2rem;
  }

  .prev-next__cell {
    flex: 1 1 50%;
  }

  .prev-next__label {
    font-size: var(--size-f7);
    font-weight: 400;
    color: var(--color-light-silver);
  }

  .prev-next__cell a {
    text-decoration: none;
  }

  .prev-next__blog-link {
    font-size: var(--size-f7);
    font-weight: 400;
    color: var(--color-secondary);
  }

  @media screen and (min-width: 30em) {
    .prev-next[data-variant='work'] {
      max-width: 64rem;
    }
  }

  @media screen and (min-width: 50em) {
    .prev-next[data-variant='work'] {
      padding: 2rem;
    }

    .prev-next__label,
    .prev-next__blog-link {
      font-size: var(--size-f6);
    }
  }
</style>
