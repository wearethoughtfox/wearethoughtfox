<script>
  /** @type {string} Container width at which items switch to stacked */
  export let threshold = '40rem';
  /** @type {string} Gap between items */
  export let gap = 'var(--space-l)';
  /** @type {string} align-items value */
  export let align = 'flex-start';
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="switcher"
  style:--switcher-target-container-width={threshold}
  style:--gutter={gap}
  style:--switcher-vertical-alignment={align}
  {...$$restProps}
>
  <slot />
</svelte:element>
