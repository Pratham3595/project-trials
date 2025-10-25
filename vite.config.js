import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  root: '.',
  server: {
    port: 3000,
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
