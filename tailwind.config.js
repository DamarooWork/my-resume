/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      scale: {
        '115': '1.15',
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}
