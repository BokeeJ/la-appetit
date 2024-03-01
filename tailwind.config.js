/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'pozadina': "url(/src/assets/images/pozadina.jpg)"
      },
      colors: {
        'black': '#000000 ',
        'orange': '#f90',
        'white': '#fff',
        'gray': '#666',
        'gray-dark': '#333',
        'mis': '#1B2631',
        'elegant': '#F5CBA7',
        'darksilver': '#717D7E'

      },
      fontFamily: {
        'naslovni': ['Philosopher'],
        'sans': ['Inter', 'sans-serif'],
        'pisana': ['cursive'],
        'link': ['Georgia'],
        'debelaSlova': ['Abril Fatface']
      },
    },
  },
  plugins: [],
}

