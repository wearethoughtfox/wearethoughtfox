<script>
  /** @type {string} Block padding (overrides --region-space) */
  export let space = 'var(--space-xl)';
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="region"
  style:--region-space={space}
  {...$$restProps}
>
  <slot />
</svelte:element>
