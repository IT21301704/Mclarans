import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://it21301704.github.io/Mclarans/ on GitHub Pages
  base: process.env.GITHUB_PAGES ? '/Mclarans/' : '/',
  plugins: [react()],
})
