/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'principal' : "#eee",
        'contraste' : '#f00',
        'comp': '#ff8000'
      }
    },
  },
  plugins: [],
}