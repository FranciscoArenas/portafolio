import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/portafolio/', // Base para GitHub Pages
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // Alias simplificado
    },
  },
})
