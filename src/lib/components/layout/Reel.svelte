<script>
  /** @type {string} Width of each item */
  export let itemWidth = 'auto';
  /** @type {string} Reel height */
  export let height = 'auto';
  /** @type {string} Gap between items */
  export let gap = 'var(--space-m)';
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="reel"
  style:--reel-item-width={itemWidth}
  style:--reel-height={height}
  style:--reel-gap={gap}
  {...$$restProps}
>
  <slot />
</svelte:element>
