/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#913c07',
        secondary: '#563c29',
        bgColor: '#fff4dc',
        primaryLight: '#b04a09',
        primaryDark: '#6b2d05',
        secondaryLight: '#6e4d37',
        secondaryDark: '#3e2b1f',
        bgColorDark: '#f5e8c0',
        accent: '#c45b0a'
      },
      fontFamily: {
        primary: ['Belleza', 'sans-serif'],
        secondary: ['Alegreya', 'serif']
      }
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
  ]

}
