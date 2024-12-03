import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env.GITHUB_ACTIONS || mode === 'production'

  return {
    base: isGitHubPages ? 'https://franciscoarenas.github.io/portafolio/' : '/', // Ruta base dinámica
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
  }
})
