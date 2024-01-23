/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./Pages/**/*.html" 
  ],
  theme: {
    extend: {},
    colors:{
      'blue': '#095A94',
      'white': '#ffffff'
    },
  },
  plugins: [],
};
