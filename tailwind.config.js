/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#64748B',
        accent: '#FACC15',
      },
    },
  },
  plugins: [
    import('@tailwindcss/forms'), // Plugin para formularios
    import('@tailwindcss/typography'), // Plugin para tipografía
  ],
}
