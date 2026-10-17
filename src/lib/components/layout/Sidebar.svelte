<script>
  /** @type {'left'|'right'} Which side the sidebar sits on */
  export let side = 'left';
  /** @type {string} Sidebar width */
  export let sideWidth = '20rem';
  /** @type {string} Minimum content area width */
  export let contentMin = '50%';
  /** @type {string} Gap between sidebar and content */
  export let gap = 'var(--space-s-l)';
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="sidebar"
  data-reversed={side === 'right' ? true : undefined}
  style:--gutter={gap}
  style:--sidebar-target-width={sideWidth}
  style:--sidebar-content-min-width={contentMin}
  {...$$restProps}
>
  <slot />
</svelte:element>
