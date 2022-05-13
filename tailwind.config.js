const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/App.js",
    "./src/components/About/index.js",
    "./src/components/Contact/index.js",
    "./src/components/Nav/index.js",
    "./src/components/Projects/index.js",
    "./src/components/Resume/index.js",
  ],
  theme: {
    extend: {
      keyframes: {
        'side-to-side': {
          '0%': { transform: 'translateX(2px)' },
          '5%': { transform: 'translateX(4px)' },
          '10%': { transform: 'translateX(8px)' },
          '15%': { transform: 'translateX(15px)' },
          '20%': { transform: 'translateX(20px)' },
          '25%': { transform: 'translateX(15px)' },
          '30%': { transform: 'translateX(8px)' },
          '35%': { transform: 'translateX(4px)' },
          '40%': { transform: 'translateX(2px)' },
          '45%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-2px)' },
          '55%': { transform: 'translateX(-4px)' },
          '60%': { transform: 'translateX(-8px)' },
          '65%': { transform: 'translateX(-15px)' },
          '70%': { transform: 'translateX(-20px)' },
          '75%': { transform: 'translateX(-15px)' },
          '80%': { transform: 'translateX(-8px)' },
          '85%': { transform: 'translateX(-4px)' },
          '90%': { transform: 'translateX(-2px)' },
          '95%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(2px)' }
        }
      },
      animation: {
        'swipe-me': 'side-to-side 3.5s linear infinite'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    plugin(({ addUtilities }) => {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      });
    })
  ],
}
