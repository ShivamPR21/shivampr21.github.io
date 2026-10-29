import { defineConfig } from 'astro/config';
import sharedConfig from './astro.config.mjs';

export default defineConfig({
  ...sharedConfig,
  site: process.env.PUBLIC_PUBLICATION_ORIGIN || 'https://immortal-machine.github.io',
  srcDir: './publication/src',
  publicDir: './publication/public',
  outDir: './dist-publication',
  cacheDir: './node_modules/.astro-publication',
});
