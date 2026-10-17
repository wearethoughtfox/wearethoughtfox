<script>
  /** @type {string} HTML element to render */
  export let as = 'span';
  /** @type {boolean} Becomes visible on focus (for skip links) */
  export let focusable = false;
</script>

<svelte:element
  this={as}
  class="visually-hidden"
  class:visually-hidden--focusable={focusable}
  {...$$restProps}
>
  <slot />
</svelte:element>
