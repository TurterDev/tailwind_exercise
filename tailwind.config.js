const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      translate: ['motion-safe'],
      textColor: ['visited'],
    },
  },
  plugins: [],
}
