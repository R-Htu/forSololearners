/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js",
    "./public/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  safelist: [
    'sping-mode',
    'autumn-mode'
  ],
  plugins: [],
}
