import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginGHPages from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginGHPages()],
  base: '/key-hero/', // sätt basvägen till ditt repo-namn
  build: {
    outDir: 'dist', // den mapp som ska byggas
  },
});
