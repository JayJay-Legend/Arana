import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          'framer-motion': ['framer-motion'],
          'i18next': ['i18next', 'react-i18next'],
        },
      },
    },
  },
  server: {
    host: true,
  },
});