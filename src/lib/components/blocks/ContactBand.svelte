<script>
  import { site } from '$lib/content/site.js';
  /** @type {boolean} Show the "how we can help you" link (hidden on /info/) */
  export let showHelpLink = true;
</script>

<section class="contact" aria-labelledby="contact-title">
  <div class="contact__inner">
    <h2 id="contact-title" class="contact__title">
      Let's make something great together.
      {#if showHelpLink}
        Here's <a href="/info/" class="contact__link dim">how we can help you.</a>
      {/if}
    </h2>
    <div id="contact" class="contact__cta">
      <a class="contact__button dim link ttu tracked" href="mailto:{site.email}">{site.calltoaction}</a>
    </div>
  </div>
</section>

<style>
  .contact {
    background: var(--color-primary);
  }

  .contact__inner {
    padding: 2rem;
  }

  .contact__title {
    font-size: var(--size-f4);
    font-weight: 400;
    color: var(--color-grey);
  }

  .contact__link {
    color: var(--color-grey);
  }

  .contact__cta {
    max-width: 32rem;
    padding-block-start: 1rem;
  }

  .contact__button {
    display: inline-block;
    font-size: var(--size-f5);
    padding: 0.5rem 1rem;
    margin-block-end: 2rem;
    color: var(--color-white);
    background: var(--color-secondary);
  }

  @media screen and (min-width: 30em) {
    .contact__cta {
      max-width: 48rem;
    }

    .contact__button {
      font-size: var(--size-f3);
      margin-inline-end: 1rem;
    }
  }

  @media screen and (min-width: 50em) {
    .contact__inner {
      padding-block: 4rem;
    }

    .contact__title {
      font-size: var(--size-f3);
    }

    .contact__button {
      padding-inline: 2rem;
    }
  }
</style>
