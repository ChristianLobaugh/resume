const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      'print': {'raw': 'print'},
      // => @media  print { ... }
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        400: '#cbd5e0',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },
      blue: {
        700: '#2b6cb0'
      },
      customblue: '#2E52A3',
      printBlue: '#006699'
    },
    extend: {
      minHeight: {
        '3/4': '75%',
      },
      fontFamily: {
        lato: ["Lato", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [],
}
