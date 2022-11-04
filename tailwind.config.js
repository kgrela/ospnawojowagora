const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DF0000',
      },
      fontFamily: {
        sans: ['Oxanium'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@headlessui/tailwindcss')({ prefix: 'ui' })],
};