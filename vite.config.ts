import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globPatterns: [
    //       '*.{js,css,html,ico,png}',
    //       'pdfs/*.pdf',
    //       'certificate/*.pdf',
    //       'images/*.jpg',
    //       'svg/*.svg',
    //       'assets/*.{js,css}',
    //     ],
    //     maximumFileSizeToCacheInBytes: 2500000,
    //   },
    // }),
  ],
});
