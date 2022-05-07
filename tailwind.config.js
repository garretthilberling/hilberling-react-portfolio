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
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
