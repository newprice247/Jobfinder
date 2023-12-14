import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
 // Important for MERN Setup: Here we're establishing a relationship between our two development servers.
    // We are pointing our Vite client-side development server to proxy API requests to our server-side Node server at port 3001.
    // Without this line, API calls would attempt to query for data from the current domain: localhost:3000
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // rollupOptions: {
    //   external: ['@heroicons/react'],
    // },
  },
});
