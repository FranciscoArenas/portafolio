<template>
  <section
    class="relative h-screen flex items-center justify-center bg-gray-50 scroll-smoot pt-4"
    id="home"
  >
    <div class="absolute inset-0 flex">
      <div class="w-1/2 bg-indigo-500 dark:bg-gray-900 hidden md:block"></div>
      <div class="w-1/2 bg-gray-50 hidden md:block"></div>
    </div>

    <div class="container relative mx-auto px-6 md:flex md:items-center md:justify-between">
      <div class="flex justify-center md:w-1/3 mb-8 md:mb-0 transform lg:translate-x-48">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQHMdCXfNU2XQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639174423412?e=1738800000&v=beta&t=vYSSN8skFi8j1tUjv4QQDyPCsJzp9tn1NRa6PsmPZM4"
          alt="Profile"
          class="rounded-full border-8 border-gray-100 shadow-lg"
        />
      </div>

      <div
        class="md:w-1/2 text-center md:text-left sm:w-full lg:w-1/2 mx-9 transform lg:translate-x-20"
      >
        <h1 class="text-5xl font-bold text-gray-800">Francisco Arenas</h1>
        <p class="mt-4 text-lg text-gray-600">
          Ingeniero en Informática | Desarrollador de Software
        </p>
        <p class="mt-4 text-sm text-gray-500 leading-relaxed max-w-lg">
          Soy un apasionado del desarrollo de software, con más de 8 años de experiencia en
          tecnologías modernas. Me gusta trabajar en proyectos desafiantes que me permitan crecer y
          contribuir al éxito del equipo.
        </p>
        <div class="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href="https://www.linkedin.com/in/francisco-arenas-pizarro-1694824a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              class="px-6 py-2 bg-transparent border border-indigo-500 text-indigo-500 font-semibold rounded-full hover:bg-indigo-500 hover:text-white transition"
            >
              Contactar
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioHomeView',
}
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  color: #333;
  scroll-behavior: smooth;
}
</style>
