const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        gray: colors.coolGray,

        surface: {
          dark: {
            DEFAULT:  '#0d1117',
            elevated: '#161b22',
          },
          light:{
            DEFAULT:'#f1f3f4',
            // elevated:''
          }

        },

        'on-surface': {
          dark: {
            DEFAULT: '#c9d1d9'
          },
          light:{
            DEFAULT:'#24292e'
          }
        },

      },
      animation:{
        blob:'blob 7s infinite'
      },
      keyframes:{
        blob:{
          '0%':{
            transform: "scale(1)"
          },
          '33%':{
            transform: "scale(1.3)"
          },
          '66%':{
            transform: "scale(0.9)"
          },
          '0%':{
            transform: "scale(1)"
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
