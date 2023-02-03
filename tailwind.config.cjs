/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          500: '#484848',
          400: '#606060',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        other: {
          600: '#484D54',
          500: '#2F4F4F',
          400: '#696969',
          300: '#A9A9A9',
          200: '#708090',
          100: '#778899'
        }
      }
    },
  },
  plugins: [],
}
