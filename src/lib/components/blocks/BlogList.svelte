<script>
  import Seo from './Seo.svelte';
  import { site } from '$lib/content/site.js';

  /** @type {{page:number,totalPages:number,posts:any[],newer:string|null,older:string|null}} */
  export let data;
</script>

<Seo
  title={data.page > 1 ? `Blog, page ${data.page}` : 'Blog'}
  description="Notes from We Are Thought Fox on design, development, maps, conversational interfaces and the projects we have worked on."
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'We Are Thought Fox blog',
    url: `${site.url}/blog/`,
    publisher: { '@id': `${site.url}/#organization` }
  }}
/>

<svelte:head>
  {#if data.newer}<link rel="prev" href={data.newer} />{/if}
  {#if data.older}<link rel="next" href={data.older} />{/if}
</svelte:head>

<section class="blog-list">
  <h1 class="visually-hidden">Blog{data.page > 1 ? `, page ${data.page}` : ''}</h1>
  {#each data.posts as post (post.slug)}
    <article class="blog-list__post">
      <a href="/blog/{post.slug}/" class="blog-list__title-link link secondary underline-hover">
        <h2 class="blog-list__title">{post.title}</h2>
      </a>
      <div class="blog-list__date"><time datetime={post.dateISO}>{post.dateLong}</time></div>
      <div class="content lh-copy measure">
        {@html post.html}
      </div>
    </article>
  {/each}

  {#if data.totalPages > 1}
    <nav class="blog-list__pagination" aria-label="Pagination">
      <div>{#if data.newer}<a href={data.newer} class="link secondary underline-hover">↫ Newer</a>{/if}</div>
      <div>{#if data.older}<a href={data.older} class="link secondary underline-hover">Older ↬</a>{/if}</div>
    </nav>
  {/if}
</section>

<style>
  .blog-list {
    max-width: 32rem;
    margin-inline: auto;
    padding: 1rem;
  }

  .blog-list__post {
    padding-block-end: 2rem;
    margin-block-end: 4rem;
  }

  .blog-list__title-link {
    display: block;
    padding-block-end: 0.5rem;
  }

  .blog-list__title {
    font-size: var(--size-f2);
    font-weight: 400;
    margin-block-end: 0;
    line-height: 1.25;
  }

  .blog-list__date {
    font-size: var(--size-f6);
    font-weight: 400;
    color: var(--color-light-silver);
    padding-block-end: 2rem;
  }

  .blog-list__pagination {
    display: flex;
    justify-content: space-between;
    padding-block-end: 2rem;
  }

  @media screen and (min-width: 30em) {
    .blog-list {
      max-width: 48rem;
      padding-inline: 4rem;
    }
  }
</style>
