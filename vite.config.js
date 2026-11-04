import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { generateTokens } from '@thoughtfox/toolkit/tokens/generate-tokens.js';

export default defineConfig({
  plugins: [
    sveltekit(),
    {
      name: 'tokens',
      buildStart: () => generateTokens()
    }
  ]
});
