<script>
  export let href = '#main-content';
</script>

<a {href} class="skip-link visually-hidden visually-hidden--focusable">
  Skip to main content
</a>

<style>
  .skip-link {
    position: fixed;
    top: var(--space-s);
    left: var(--space-s);
    z-index: 999;
    background: var(--color-primary);
    color: var(--color-dark);
    padding: var(--space-xs) var(--space-s);
    border-radius: var(--radius-s);
    font-weight: var(--font-bold);
    text-decoration: none;
  }
</style>
