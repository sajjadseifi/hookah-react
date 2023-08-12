const colors = require('tailwindcss/colors')

module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      // colors: {
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   black: colors.black,
      //   white: colors.white,
      //   gray: colors.gray,
      //   emerald: colors.emerald,
      //   indigo: colors.indigo,
      //   yellow: colors.yellow,
      // },
      fontFamily: {
        'donor':['Donor'],
        'mj': ['Mj'],
        'body': ['Mj','Donor'],
      },
      screens: {
        'xs': '420px',
        'tx': '510px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      extend: {},
    },
  plugins: [],
}

