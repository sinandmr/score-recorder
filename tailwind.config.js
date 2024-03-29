/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#0A0A0A',
        secondary: '#22c55e'
      },
      screens: {
        'sm': '100px',
        'md': '1550px',
      }
    },
  },
  plugins: [],
}