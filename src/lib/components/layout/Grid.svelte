<script>
  /** @type {string} Minimum item width */
  export let minItemSize = '16rem';
  /** @type {string} Gap between items */
  export let gap = 'var(--space-l)';
  /** @type {'auto-fill'|'auto-fit'} Grid placement mode */
  export let placement = 'auto-fill';
  /** @type {string|undefined} Preset layout: '50-50' or 'thirds' */
  export let layout = undefined;
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="grid"
  data-layout={layout}
  style:--grid-min-item-size={minItemSize}
  style:--gutter={gap}
  style:--grid-placement={placement}
  {...$$restProps}
>
  <slot />
</svelte:element>
