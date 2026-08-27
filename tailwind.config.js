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
          blue: '#8cb0bf',
          bluelight: '#a2c4d2',
          bluedark: '#6f94a4',
          navy: '#061326',
          dark: '#08111D',
          hero: '#0B1728',
          court: '#0F392B',
          emerald: '#165B45',
          mint: '#2DD4BF',
          sky: '#8cb0bf',
          volt: '#8cb0bf',
          lime: '#D4F826',
          clay: '#C85A32',
          claylight: '#F4A261',
          slate: '#1E293B',
          cream: '#FAF9F5',
          offwhite: '#F4F7FB',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Syne', 'system-ui', 'sans-serif'],
        impact: ['Bebas Neue', 'Impact', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        'blue-glow': '0 0 25px rgba(0, 89, 166, 0.45)',
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
