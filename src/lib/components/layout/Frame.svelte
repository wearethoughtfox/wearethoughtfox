<script>
  /** @type {string} Aspect ratio e.g. '16/9', '1/1', '4/3' */
  export let ratio = '16/9';
  /** @type {string} HTML element to render */
  export let as = 'div';
</script>

<svelte:element
  this={as}
  class="frame"
  style:--frame-ratio={ratio.replace('/', ' / ')}
  {...$$restProps}
>
  <slot />
</svelte:element>
