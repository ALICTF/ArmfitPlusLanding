// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://alictf.github.io', 
  base: '/BlackFriday', 

  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});