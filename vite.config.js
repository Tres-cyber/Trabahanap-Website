import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Use env-driven base so GitHub Pages serves under /<repo>/ while keeping local dev at '/'
  base: process.env.VITE_BASE || '/',
})
