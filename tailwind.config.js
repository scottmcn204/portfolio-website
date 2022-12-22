/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'bounce 2s ease-out infinite',
        fadeIn : 'fadeIn 1s ease-in',
      },
      fontFamily: {
        burtons: "burtons",
      },
      keyframes: {
        fadeIn : {
          '0%' : { opacity: '0' },
          '100%' : { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}