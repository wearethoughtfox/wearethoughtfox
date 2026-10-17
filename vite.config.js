import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { generateTokens } from './scripts/generate-tokens.js';

export default defineConfig({
  plugins: [
    sveltekit(),
    {
      name: 'tokens',
      buildStart: generateTokens
    }
  ]
});
