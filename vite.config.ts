import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, './src'),
      "@shared": resolve(__dirname, './src/shared'),
      "@pages": resolve(__dirname, './src/pages'),
      "@features": resolve(__dirname, './src/features'),
      "@widgets": resolve(__dirname, './src/widgets'),
    },
  },
})
