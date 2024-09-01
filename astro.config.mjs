import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
      langs: ['astro', 'javascript', 'typescript', 'html', 'css', 'markdown', 'go'],
      wrap: true,
      transformers: [],
    },
  }
});