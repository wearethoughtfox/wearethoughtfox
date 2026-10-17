/**
 * Svelte action: fires a 'reveal' custom event when the element enters the viewport.
 * Pair with CSS animations gated on .is-revealed inside
 * @media (prefers-reduced-motion: no-preference).
 *
 * Usage:
 *   <div use:reveal on:reveal={() => visible = true} class:is-revealed={visible}>
 */
export function reveal(node, { threshold = 0.1, once = true } = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.dispatchEvent(new CustomEvent('reveal'));
          if (once) observer.disconnect();
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
