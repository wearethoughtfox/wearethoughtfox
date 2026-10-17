<script>
  import { page } from '$app/stores';
  import { site } from '$lib/content/site.js';

  function isCurrent(href, pathname) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }
</script>

<nav class="site-nav" aria-label="Main">
  <a class="site-nav__home dim" href="/" title="Home">
    <img src="/images/logo-abbr.png" alt="We Are Thought Fox" width="72" height="72" />
  </a>
  <div class="site-nav__links">
    {#each site.nav as link}
      <a
        class="site-nav__link link dim"
        class:current={isCurrent(link.href, $page.url.pathname)}
        aria-current={isCurrent(link.href, $page.url.pathname) ? 'page' : undefined}
        href={link.href}
      >
        {link.label}
      </a>
    {/each}
  </div>
</nav>

<style>
  .site-nav {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    border-block-end: var(--stroke);
  }

  .site-nav__home {
    display: block;
    text-align: center;
    margin-block-end: 0.5rem;
  }

  .site-nav__home img {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
  }

  .site-nav__links {
    display: block;
    text-align: center;
  }

  .site-nav__link {
    display: inline-block;
    color: var(--color-dark-gray);
    font-size: var(--size-f6);
    margin-inline-end: 1rem;
    position: relative;
  }

  /* Coral underline on the current page (Tachyons .current + .b--primary) */
  .site-nav__link.current::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.5rem;
    border-bottom: 0.25rem solid var(--color-primary);
  }

  @media screen and (min-width: 50em) {
    .site-nav {
      display: table;
      padding-inline: 2rem 4rem;
    }

    .site-nav__home {
      display: table-cell;
      vertical-align: middle;
      width: 25%;
      text-align: start;
      margin-block-end: 0;
    }

    .site-nav__links {
      display: table-cell;
      vertical-align: middle;
      width: 75%;
      text-align: end;
    }

    .site-nav__link {
      font-size: var(--size-f5);
      margin-inline-end: 2rem;
    }
  }
</style>
