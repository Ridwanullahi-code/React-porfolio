module.exports = {
  mode: "jit",
  darkMode: 'class',
  purge: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      xsm:'11px'
    },
    extend: {
      colors: {
        paleBlue:'#0F2B5B',
        deepBlue: '#00183E',
        Blue: '#0F3354',
        deepRed: "#801812",
        purple: '#5B1A66',
        deepGreen:'#4AAEAC'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
