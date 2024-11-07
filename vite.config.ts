import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/key-hero/', // sätt basvägen till ditt repo-namn
  build: {
    outDir: 'dist', // den mapp som ska byggas
  },
});
