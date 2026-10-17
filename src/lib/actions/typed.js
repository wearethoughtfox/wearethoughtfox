/**
 * Svelte action: typewriter effect, a small stand-in for typed.js.
 * Types each word, backspaces it, and stops on the last one.
 * Dispatches a 'typed:complete' event on the node when done.
 * Respects prefers-reduced-motion by showing the final word immediately.
 */
export function typed(node, options = {}) {
  const {
    words = [],
    typeSpeed = 45,
    backSpeed = 20,
    backDelay = 500,
    startDelay = 1000
  } = options;

  let timer;
  let cancelled = false;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const humanize = (speed) => Math.round((Math.random() * speed) / 2) + speed;
  const done = () => node.dispatchEvent(new CustomEvent('typed:complete'));

  if (reduce || words.length === 0) {
    node.textContent = words[words.length - 1] || '';
    done();
    return {};
  }

  function typeWord(i, pos) {
    if (cancelled) return;
    const word = words[i];
    node.textContent = word.slice(0, pos);
    if (pos < word.length) {
      timer = setTimeout(() => typeWord(i, pos + 1), humanize(typeSpeed));
    } else if (i === words.length - 1) {
      done();
    } else {
      timer = setTimeout(() => backspace(i, word.length), backDelay);
    }
  }

  function backspace(i, pos) {
    if (cancelled) return;
    node.textContent = words[i].slice(0, pos);
    if (pos > 0) {
      timer = setTimeout(() => backspace(i, pos - 1), humanize(backSpeed));
    } else {
      typeWord(i + 1, 0);
    }
  }

  node.textContent = '';
  timer = setTimeout(() => typeWord(0, 0), startDelay);

  return {
    destroy() {
      cancelled = true;
      clearTimeout(timer);
    }
  };
}
