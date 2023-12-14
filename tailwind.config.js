/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue, js, jsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'light-blue': '#E5EbF8',
        'ash-blue': '#586EA2',
        'navy': '#003975',
        'dark-navy': '#001033',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jua': ['Jua', 'sans-serif']
      },
    },
  },
  plugins: [],
}

