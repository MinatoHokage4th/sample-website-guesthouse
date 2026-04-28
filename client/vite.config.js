import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //base: '/sample-website-guesthouse/'
  //server: {
  //  port: 3000,
  // proxy: {
  //    '/api': 'http://localhost:5000'
  //  }
  //}
});
