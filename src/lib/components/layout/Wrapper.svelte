<script>
  /** @type {string} Maximum content width */
  export let maxWidth = 'var(--wrapper-max-width, 1360px)';
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="wrapper"
  style:--wrapper-max-width={maxWidth}
  {...$$restProps}
>
  <slot />
</svelte:element>
