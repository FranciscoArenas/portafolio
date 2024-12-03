<template>
  <section class="animate-fadeIn bg-gray-900 py-16" id="skills">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bol border-b-4 border-yellow-400 pb-2 mb-6">Habilidades Técnicas</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-start"
      >
        <div v-for="categoria in skills" :key="categoria.categoria" class="mb-8">
          <h2 class="text-yellow-400 text-2xl font-bold mb-4">
            {{ categoria.categoria }}
          </h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
            <div
              v-for="tecnologia in categoria.tecnologias"
              :key="tecnologia.nombre"
              class="bg-gray-800 p-4 text-center rounded-lg shadow-md"
            >
              <img
                :src="tecnologia.icono"
                :alt="tecnologia.nombre"
                class="w-12 h-12 mx-auto mb-2"
              />
              <p class="text-yellow-400 font-bold">{{ tecnologia.nombre }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import skills from '../json/skills.json'
export default {
  name: 'PortfolioSkills',
  data() {
    return {
      skills,
    }
  },
}
</script>
