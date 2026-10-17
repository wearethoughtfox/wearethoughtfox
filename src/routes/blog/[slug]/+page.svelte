<script>
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PrevNext from '$lib/components/blocks/PrevNext.svelte';
  import { site } from '$lib/content/site.js';

  export let data;
  $: post = data.post;
</script>

<Seo
  title={post.title}
  description={post.excerpt}
  type="article"
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    url: `${site.url}/blog/${post.slug}/`,
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@id': `${site.url}/#organization` },
    keywords: post.tags.join(', ')
  }}
/>

<section class="post-wrap">
  <article class="post">
    <h1 class="post__title">{post.title}</h1>
    <div class="post__date"><time datetime={post.dateISO}>{post.dateLong}</time></div>
    <div class="content lh-copy measure">
      {@html post.html}
    </div>
  </article>

  <PrevNext
    variant="blog"
    prev={data.prev ? { href: `/blog/${data.prev.slug}/`, title: data.prev.title } : null}
    next={data.next ? { href: `/blog/${data.next.slug}/`, title: data.next.title } : null}
  />
</section>

<style>
  .post-wrap {
    max-width: 32rem;
    margin-inline: auto;
    padding: 1rem;
  }

  .post {
    padding-block-end: 2rem;
    margin-block-end: 4rem;
  }

  .post__title {
    font-size: var(--size-f2);
    font-weight: 400;
    margin-block-end: 0;
    line-height: 1.25;
  }

  .post__date {
    font-size: var(--size-f6);
    font-weight: 400;
    color: var(--color-light-silver);
    padding-block-end: 2rem;
  }

  @media screen and (min-width: 30em) {
    .post-wrap {
      max-width: 48rem;
      padding-inline: 4rem;
    }
  }
</style>
