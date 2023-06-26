/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        lightGreen: '#F2EFDC',
        purple: '#300B40',
        lightPurple: '#CEB3F2',
        lightGray: '#E9E9F2',
        white: '#FFF',
        yellow: '#F8E792',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

