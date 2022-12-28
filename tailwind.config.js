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
        appearfade : 'appear 1.5s ease-in',
      },
      fontFamily: {
        burtons: "burtons",
      },
      keyframes: {
        appear: {
          '0%' : { transform: 'translateY(30px)',
                    opacity: '0' },
          '100%' : { transform : 'translateY(-10px)',
                    opacity: '1' }
        }
      },
    },
  },
  plugins: [],
}