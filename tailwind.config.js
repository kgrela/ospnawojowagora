const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.{ts,md,vue}',
    './components/**/*.{ts,md,vue}',
    './layouts/**/*.{ts,md,vue}',
    './pages/**/*.{ts,md,vue}',
    './lib/**/*.{ts,md,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
      },
      fontFamily: {
        sans: ['Oxanium'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
