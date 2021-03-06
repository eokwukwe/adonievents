const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './resources/views/**/*.edge',
    './resources/js/**/*.js',
    './resources/css/**/*.css',
    './resources/js/**/*.vue',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      fill: (theme) => theme('colors'),
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      fill: ['focus', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
