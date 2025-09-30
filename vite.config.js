import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/stp_o/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ontology: resolve(__dirname, 'ontology.html'),
        data: resolve(__dirname, 'data.html'),
        aboutUs: resolve(__dirname, 'about-us.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
  },
  server: {
    // Optional: configure a dev server port if needed
    // port: 3000,
  },
}); 