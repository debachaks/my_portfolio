import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_portfolio/',  // THIS IS CRITICAL
  plugins: [react()],
});
