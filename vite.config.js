// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Make sure your postcss.config.cjs is in the root as well.

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs', // <--- This line explicitly tells Vite to use your PostCSS config
  },
});
