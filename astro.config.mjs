import {defineConfig} from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: process.env.NEXT_PUBLIC_SITE_URL || 'https://doclist-bd.com',
  output: 'server',
  adapter: cloudflare({imageService: 'passthrough'}),
  trailingSlash: 'never',
  build: {inlineStylesheets: 'never'},
  vite: {
    esbuild: {jsx: 'automatic'},
    ssr: {noExternal: ['react', 'react-dom']},
  },
});
