<script>
  /** Grey banner used on the home hero and the info page */
</script>

<header class="banner">
  <div class="banner__inner">
    <slot />
  </div>
</header>

<style>
  .banner {
    background: var(--color-grey);
    position: relative;
  }

  .banner__inner {
    margin-inline: auto;
    padding: 4rem 1rem;
  }

  @media screen and (min-width: 30em) {
    .banner__inner {
      padding-inline: 2rem;
    }
  }
</style>
