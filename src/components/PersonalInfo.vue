<template>
  <div class="portfolio">
    <section class="header">
      <div class="header-content">
        <h1>Francisco Arenas</h1>
        <p>Ingeniero en Informática | Desarrollador de Software</p>
      </div>
    </section>

    <section class="section about">
      <div class="section-content">
        <h2>Sobre Mí</h2>
        <p>
          Soy un apasionado del desarrollo de software con más de 8 años de experiencia en
          tecnologías modernas. Busco innovar y superar desafíos constantemente.
        </p>
      </div>
    </section>

    <section class="section experience">
      <div class="section-content">
        <h2>Experiencia Profesional</h2>
        <div class="card" v-for="job in jobs" :key="job.id">
          <h3>{{ job.empresa }}</h3>
          <p>
            <strong>{{ job.cargo }}</strong> - {{ job.fecha }}
          </p>
          <p>{{ job.descripcion }}</p>
        </div>
      </div>
    </section>

    <section class="section projects">
      <div class="section-content">
        <h2>Proyectos Destacados</h2>
        <div class="card" v-for="project in projects" :key="project.id">
          <h3>{{ project.nombre }}</h3>
          <p>{{ project.fecha }}</p>
          <p>{{ project.descripcion }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import jobs from '../json/'
export default {
  name: 'Porta-folio',
  data() {
    return {
      jobs,
    }
  },
}
</script>
<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  color: #fff;
  background-color: #0f0f0f;
}

.header {
  height: 100vh;
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/36b1b779064987.5cb76cb3c3180.jpg')
    no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

.header h1 {
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
}

.header p {
  font-size: 1.5rem;
  margin-top: 10px;
}

/* Sections */
.section {
  padding: 100px 20px;
  text-align: center;
  background-color: #1c1c1c;
  margin-bottom: 20px;
  border-radius: 20px;
}

.section-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffd700;
}

.section-content p {
  font-size: 1.2rem;
  line-height: 1.8;
}

/* Cards */
.card {
  background: #333;
  padding: 20px;
  margin: 20px auto;
  border-radius: 15px;
  max-width: 800px;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

.card h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  line-height: 1.5;
}

/* Hover Effect */
.card:hover {
  background: linear-gradient(135deg, #ffd700, #ff7e00);
  color: #000;
  transition: 0.3s ease-in-out;
}

/* Responsive */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2.5rem;
  }

  .header p {
    font-size: 1rem;
  }

  .section-content h2 {
    font-size: 2rem;
  }
}
</style>
