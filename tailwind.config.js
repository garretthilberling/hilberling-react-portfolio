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
      backgroundImage: {
        'profile-pic': "[url('../../assets/img/profile-pic/profile-pic.jpg')]"
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
