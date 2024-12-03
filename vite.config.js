import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/portafolio/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Combina los archivos en uno solo si es posible
      },
    },
  },
})