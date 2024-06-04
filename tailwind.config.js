/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    fontFamily: {
      sans: ['Farro', 'sans-serif'],
    },
    colors: {
      'background': '#112941',
      'primary': '#3270af',
      'primary-light': '#5b9fe2',
      'primary-dark': '#214b75',
      'primary-text': '#ffffff',
      'secondary-text': '#c2c2c2',
      'divider': '#8f8f8f',
      'accent': '#ffbf00',
    },
    extend: {},
  },
  plugins: [],
}

