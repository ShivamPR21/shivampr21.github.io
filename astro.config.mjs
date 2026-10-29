import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://shivampr21.com',
  output: 'static',
  integrations: [mdx()],
  vite: {
    server: { allowedHosts: ['terminal.local'] },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      theme: 'github-dark-high-contrast',
      wrap: true,
    },
  },
  build: {
    format: 'directory',
  },
});
