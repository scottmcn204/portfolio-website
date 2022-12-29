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
        appearfade : 'appear 0.5s ease-in',
        appearfadeslow : 'appearSlow 1s ease-in',
      },
      fontFamily: {
        burtons: "burtons",
      },
      keyframes: {
        appear: {
          '0%' : { transform: 'translate3d(0, 200px, 0)',
                    opacity: '0' },
          '100%' : { transform : 'translate3d(0, 0, 0)',
                    opacity: '90%' }
        },
        appearSlow: {
          '0%' : { transform: 'translate3d(0, 200px, 0)',
                   opacity: '0' },
          '75%' : { transform: 'translate3d(0, 200px, 0)',
                   opacity: '0' },
                
          '100%' : { transform : 'translate3d(0, 0, 0)',
                      opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}