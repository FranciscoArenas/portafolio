<template>
  <section class="animate-fadeIn bg-gray-900 py-16" id="experience">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold border-b-4 border-yellow-400 pb-2 mb-6">
        Experiencia Profesional
      </h2>
      <div class="space-y-6">
        <div v-for="job in jobs" :key="job.id" class="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold">{{ job.empresa }}</h3>
          <p class="text-sm text-gray-300">{{ job.cargo }}</p>
          <p class="text-gray-400 mt-2">
            {{ job.descripcion }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import jobs from '../json/experience.json'
export default {
  name: 'PortfolioExperience',
  data() {
    return {
      jobs,
    }
  },
}
</script>
