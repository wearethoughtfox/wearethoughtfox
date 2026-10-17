import { readable } from 'svelte/store';

/** Reactive prefers-reduced-motion media query. Use to gate animations. */
export const prefersReducedMotion = readable(false, (set) => {
  if (typeof window === 'undefined') return;
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  set(mq.matches);
  const handler = (e) => set(e.matches);
  mq.addEventListener('change', handler);
  return () => mq.removeEventListener('change', handler);
});
