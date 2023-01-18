module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extends: {
      colors: {
        red: '#AC4708',
        Blue: '#0F3354',
        deepRed: "#801812",
        purple: '#5B1A66'
      }
    }
  },
  plugins: [],
};
