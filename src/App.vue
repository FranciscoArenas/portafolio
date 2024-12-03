<template>
  <div id="app">
    <PortfolioHeader />
    <main>
      <PortfolioHomeView />
      <PortfolioAbout />
      <PortfolioExperience />
      <PortfolioProjects />
      <PortfolioSkills />
      <PortfolioFooter />
    </main>
  </div>
</template>

<script>
import PortfolioHeader from './components/Header.vue'
import PortfolioHomeView from './views/HomeView.vue'
import PortfolioAbout from './components/About.vue'
import PortfolioExperience from './components/Experience.vue'
import PortfolioProjects from './components/Projects.vue'
import PortfolioSkills from './components/Skills.vue'
import PortfolioFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    PortfolioHeader,
    PortfolioHomeView,
    PortfolioAbout,
    PortfolioExperience,
    PortfolioProjects,
    PortfolioSkills,
    PortfolioFooter,
  },
  methods: {
    adjustMainMargin() {
      const header = document.querySelector('header')
      const main = document.querySelector('main')

      if (header && main) {
        const headerHeight = header.offsetHeight
        main.style.marginTop = `${headerHeight}px`
      }
    },
  },
  mounted() {
    localStorage.theme = 'light'

    this.adjustMainMargin()

    window.addEventListener('resize', this.adjustMainMargin)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustMainMargin)
  },
}
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #0f0f0f;
  color: #fff;
  scroll-behavior: smooth;
}
</style>
