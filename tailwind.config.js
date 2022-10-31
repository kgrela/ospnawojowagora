const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
      },
    },
  },
  // plugins: [require('daisyui')],
  // daisyui: {
  //   styled: true,
  //   themes: true,
  //   base: true,
  //   utils: true,
  //   logs: true,
  //   rtl: false,
  //   prefix: '',
  //   darkTheme: 'light',
  // },
};
