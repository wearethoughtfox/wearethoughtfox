<script>
  /** @type {string} Minimum height */
  export let minHeight = '100svh';
  /** @type {string} Padding around content */
  export let padding = 'var(--space-l)';
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<!--
  The centred element should have data-cover-centred on it.
  e.g. <h1 data-cover-centred>Heading</h1>
-->
<svelte:element
  this={as}
  class="cover"
  style:--cover-min-height={minHeight}
  style:--cover-padding={padding}
  {...$$restProps}
>
  <slot />
</svelte:element>
