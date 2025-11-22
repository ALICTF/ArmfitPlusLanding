import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ALICTF.github.io',
  base: '/ArmfitPlusLanding', // <--- این خط باید دقیقاً اسم مخزن جدیدت باشه
  
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});