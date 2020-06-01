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
    
    extend: {
      colors: {
        customblue: '#2E52A3',
        printBlue: '#006699'
      },
      minHeight: {
        '3/4': '75%',
      },
      fontFamily: {
        lato: ["Lato", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  purge: {
    enabled: true,
    content: ['./**/*.html'],
  },
  variants: {},
  plugins: [],
}
