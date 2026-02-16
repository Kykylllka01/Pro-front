import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      /* pass your config */
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
