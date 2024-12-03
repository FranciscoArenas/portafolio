<template>
  <div class="flex items-center justify-end space-x-4">
    <span class="bg-indigo-500">🌞</span>
    <button
      @click="toggleTheme"
      class="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center p-1 transition-colors duration-300"
    >
      <span
        :class="[isDarkMode ? 'translate-x-6 bg-gray-800' : 'translate-x-0 bg-white']"
        class="w-5 h-5 transform rounded-full shadow-md transition-transform duration-300"
      ></span>
    </button>
    <span class="bg-indigo-500">🌙</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    }
  },
  mounted() {
    const userTheme = localStorage.getItem('theme')
    if (userTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    },
  },
}
</script>
