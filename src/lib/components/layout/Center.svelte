<script>
  /** @type {string} Maximum width */
  export let maxWidth = 'var(--measure, 60ch)';
  /** @type {boolean} Add horizontal padding equal to --gutter */
  export let gutters = false;
  /** @type {boolean} Centre based on content width (flexbox column mode) */
  export let intrinsic = false;
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="center"
  data-gutters={gutters ? true : undefined}
  data-intrinsic={intrinsic ? true : undefined}
  style:--center-max-width={maxWidth}
  {...$$restProps}
>
  <slot />
</svelte:element>
