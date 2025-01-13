import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Viteの設定
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3002,
  },
});
