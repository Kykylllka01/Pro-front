import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin(),
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
