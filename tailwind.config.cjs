/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      'cursive': ['Homemade Apple', 'cursive']
    },
    extend: {
      content: {
        'logo': 'url("/assets/notes.svg")'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
