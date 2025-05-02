import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/e_portfolio/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html' // Explicit entry point
    }
  },
  server: { // Fixes local dev
    port: 3000,
    open: true,
  }
})
