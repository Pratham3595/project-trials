import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
  },
  plugins: [
    react({
      // Add this to process .js files as JSX
      include: '**/*.{js,jsx,ts,tsx}',
    }),
  ],
});
