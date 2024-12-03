<template>
  <section class="animate-fadeIn bg-gray-800 dark:bg-gray-900 py-16" id="projects">
    <div class="container mx-auto px-4">
      <h2
        class="text-2xl font-bold dark:text-yellow-300 border-b-4 border-yellow-400 dark:border-yellow-300 pb-2 mb-6"
      >
        Proyectos Destacados
      </h2>
      <div class="space-y-6">
        <div
          v-for="project in paginatedProjects"
          :key="project.id"
          class="bg-gray-700 dark:bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-semibold dark:text-yellow-300">
            {{ project.nombre }}
          </h3>
          <p class="text-gray-400 dark:text-gray-300 mt-2">{{ project.descripcion }}</p>
          <button
            class="mt-4 px-4 py-2 font-semibold rounded-lg transition"
            :class="{
              'bg-indigo-400 dark:bg-yellow-300 text-gray-900 hover:bg-yellow-500 dark:hover:bg-yellow-400':
                project.enlaces !== 'uso interno',
              'bg-gray-500 dark:bg-gray-700 text-gray-400 cursor-not-allowed':
                project.enlaces === 'uso interno',
            }"
            :disabled="project.enlaces === 'uso interno'"
            @click="openLink(project.enlaces)"
          >
            Ver Proyecto
          </button>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <button
          class="px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg mr-2 hover:bg-gray-700 dark:hover:bg-gray-600 transition"
          :disabled="currentPage === 1"
          @click="previousPage"
        >
          Anterior
        </button>
        <span class="text-white dark:text-yellow-300 mx-4">
          Página {{ currentPage }} de {{ totalPages }}
        </span>
        <button
          class="px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg ml-2 hover:bg-gray-700 dark:hover:bg-gray-600 transition"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          Siguiente
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '../json/proyects.json'

export default {
  name: 'PortfolioProjects',
  data() {
    return {
      projects,
      itemsPerPage: 5,
      currentPage: 1,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.projects.length / this.itemsPerPage)
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.projects.slice(start, end)
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    openLink(link) {
      if (link !== 'uso interno') {
        window.open(link, '_blank')
      }
    },
  },
}
</script>
