<template>
  <header class="bg-gray-800 fixed w-full z-10 shadow-md top-0">
    <nav class="container mx-auto flex justify-between items-center px-4">
      <h1 class="text-2xl font-bold bg-indigo-500">Francisco Arenas</h1>

      <button
        class="hidden md:inline-block bg-indigo-500 px-4 py-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-gray-800"
        @click="toggleLayout"
      >
        Alternar Diseño
      </button>

      <ThemeSwitch />
      <button class="bg-indigo-500" @click="isMenuOpen = !isMenuOpen" v-if="isAlternateLayout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          v-if="!isMenuOpen"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          v-else
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <ul
        :class="[
          isMenuOpen ? 'flex' : 'hidden',
          isAlternateLayout
            ? 'absolute flex flex-col items-center space-y-4 lg:w-2/5 h-screen top-10 right-0 bg-gray-800'
            : 'hidden md:flex',
        ]"
        class="top-16 right-0 bg-gray-800"
      >
        <li>
          <a href="#home" class="hover:bg-indigo-500 block py-2 px-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 22V12h6v10" />
            </svg>
            Home
          </a>
        </li>

        <li><a href="#about" class="hover:bg-indigo-500 block py-2 px-4">Sobre Mí</a></li>
        <li>
          <a href="#experience" class="hover:bg-indigo-500 block py-2 px-4">Experiencia</a>
        </li>
        <li>
          <a href="#projects" class="hover:bg-indigo-500 block py-2 px-4">Proyectos</a>
        </li>
        <li>
          <a href="#skills" class="hover:bg-indigo-500 block py-2 px-4">Habilidades</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import ThemeSwitch from './ThemeSwitch.vue'
export default {
  name: 'PortfolioHeader',
  components: {
    ThemeSwitch,
  },
  data() {
    return {
      isMenuOpen: false,
      isAlternateLayout: false,
    }
  },
  methods: {
    toggleLayout() {
      this.isAlternateLayout = !this.isAlternateLayout
      console.log('Layout alternado:', this.isAlternateLayout)
    },
    checkScreenSize() {
      this.isAlternateLayout = window.matchMedia('(max-width: 767px)').matches
      console.log('Resolución menor o igual a 767px:', this.isAlternateLayout)
    },
  },
  mounted() {
    this.checkScreenSize()

    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
}
</script>

<style scoped>
.transition-menu {
  transition: all 0.3s ease-in-out;
}
</style>
