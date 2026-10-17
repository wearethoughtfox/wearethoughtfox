<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PrevNext from '$lib/components/blocks/PrevNext.svelte';
  import { site } from '$lib/content/site.js';

  export let data;
  $: item = data.item;
</script>

<Seo
  title={item.title}
  description={item.excerpt || site.description}
  image={item.image}
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: item.title,
    description: item.excerpt,
    image: `${site.url}${item.image}`,
    dateCreated: item.date.toISOString().slice(0, 10),
    url: `${site.url}/work/${item.slug}/`,
    author: { '@id': `${site.url}/#organization` }
  }}
/>

<article class="project">
  <header class="project__header">
    <h1 class="project__title">{item.title}</h1>
  </header>

  <div class="project__meta">
    {item.year}
    <ul class="dash light-silver">
      {#each item.types as t}
        <li>{t}</li>
      {/each}
    </ul>
  </div>

  <div class="project__content content">
    {@html item.html}
  </div>
</article>

<PrevNext
  variant="work"
  prev={data.prev ? { href: `/work/${data.prev.slug}/`, title: data.prev.title } : null}
  next={data.next ? { href: `/work/${data.next.slug}/`, title: data.next.title } : null}
/>

<style>
  .project {
    padding: 2rem 1rem 0;
  }

  .project__title {
    font-size: var(--size-f2);
    font-weight: 700;
    margin-block-start: 0;
  }

  .project__meta {
    padding-block-end: 1rem;
  }

  .project__content {
    padding-block-end: 2rem;
  }

  @media screen and (min-width: 50em) {
    .project {
      display: flex;
      align-items: flex-start;
    }

    .project__header,
    .project__meta {
      flex: 0 0 25%;
      padding-inline: 1rem;
      box-sizing: border-box;
    }

    .project__content {
      flex: 0 0 50%;
      padding-inline-end: 1rem;
      box-sizing: border-box;
    }
  }
</style>
