const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        400: '#f7fafc',
        700: '#fff5f5',
        900: '#1a202c'
      },
      blue: {
        700: '#2b6cb0'
      }
    },
    extend: {
      minHeight: {
        '3/4': '75%',
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {},
  plugins: [],
}
