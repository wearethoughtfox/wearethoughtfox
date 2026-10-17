<script>
  /** @type {string} Gap between items */
  export let gap = 'var(--space-m)';
  /** @type {string} justify-content value */
  export let justify = 'flex-start';
  /** @type {string} align-items value */
  export let align = 'center';
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="cluster"
  style:--gutter={gap}
  style:--cluster-horizontal-alignment={justify}
  style:--cluster-vertical-alignment={align}
  {...$$restProps}
>
  <slot />
</svelte:element>
