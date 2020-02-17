const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
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
