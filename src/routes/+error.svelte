<script>
  import { page } from '$app/stores';
  import Seo from '$lib/components/blocks/Seo.svelte';
  import PageBanner from '$lib/components/blocks/PageBanner.svelte';
  import ContactBand from '$lib/components/blocks/ContactBand.svelte';
</script>

<Seo title={$page.status === 404 ? 'Page not found' : 'Something went wrong'} noindex />

<PageBanner>
  <h2 class="f4 f2-l secondary">{$page.status}</h2>
  <h1 class="f1 secondary" style="margin-top:0">
    {$page.status === 404 ? "That page isn't here" : 'Something went wrong'}
  </h1>
</PageBanner>

<article class="error-body measure">
  <p>
    The page may have moved. Try the <a href="/work/">work</a>, the <a href="/blog/">blog</a>, or
    <a href="/">start again from the home page</a>.
  </p>
</article>

<ContactBand />

<style>
  .error-body {
    padding: 2rem 1rem 4rem;
  }

  @media screen and (min-width: 30em) {
    .error-body {
      padding-inline: 2rem;
    }
  }
</style>
