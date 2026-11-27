import {defineConfig} from 'astro/config';
import react from '@astrojs/react';

// Fully static: every page is built to HTML. The daily release schedule is applied at build time
// (a scheduled GitHub Action rebuilds at 00:00 Asia/Dhaka), so no Worker is needed.
export default defineConfig({
  output: 'static',
  integrations: [react()],
  trailingSlash: 'never',
  build: {format: 'file'},
  devToolbar: {enabled: false},
});
