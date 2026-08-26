/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tennis: {
          dark: '#060B0E',
          hero: '#0A1118',
          court: '#0F392B',
          emerald: '#165B45',
          mint: '#2DD4BF',
          volt: '#CDFF00',
          lime: '#D4F826',
          clay: '#C85A32',
          claylight: '#F4A261',
          navy: '#0B132B',
          slate: '#1E293B',
          cream: '#FAF9F5',
          offwhite: '#F5F3EF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Syne', 'system-ui', 'sans-serif'],
        impact: ['Bebas Neue', 'Impact', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        'volt-glow': '0 0 30px rgba(205, 255, 0, 0.4)',
        'court-card': '0 20px 40px -15px rgba(10, 17, 24, 0.15)',
        'elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
