<script>
  /** @type {string} CSS length for the gap between children */
  export let space = 'var(--space-m)';
  /** @type {boolean} Apply spacing recursively to all descendants */
  export let recursive = false;
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="stack"
  class:stack--recursive={recursive}
  style:--stack-space={space}
  {...$$restProps}
>
  <slot />
</svelte:element>
