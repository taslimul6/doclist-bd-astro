import {defineConfig} from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

// Server-rendered on Cloudflare: publication scheduling and engagement counters need per-request logic.
export default defineConfig({
  output: 'server',
  adapter: cloudflare({imageService: 'passthrough'}),
  integrations: [react()],
  trailingSlash: 'never',
  build: {format: 'file'},
  security: {checkOrigin: false}, // engagement route does its own origin check
  devToolbar: {enabled: false},
});
