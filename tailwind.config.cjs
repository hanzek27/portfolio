/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'md': '800px',
      'lg': '1200px',
    },
    fontFamily: {
      main: ['Lexend', 'sans-serif'],
      console: ['Roboto Mono', 'monospace'],
    },
    fontSize: {
      'large': ['2.5rem', {
        lineHeight: '2.5rem',
        letterSpacing: '0',
        fontWeight: '600',
      }],
      'medium': ['1.25rem', {
        lineHeight: '1.75rem',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      'logo': ['0.94rem', {
        lineHeight: '0.94rem',
        letterSpacing: '0',
        fontWeight: '500',
      }],
      'console': ['0.8rem', {
        lineHeight: '0.8rem',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      'button': ['1.1rem', {
        lineHeight: '1.1rem',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      'paragraph': ['0.88rem', {
        lineHeight: '1.88rem',
        letterSpacing: '0',
        fontWeight: '400',
      }],
    },
    borderRadius: {
      'medium': '10px',
      'full': '100%',
    },
    rotate: {
      'side': '-90deg',
    },
    extend: {
      colors: {
        'dark': '#071014',
        'light': '#F4F4F4',
        'accent': {
          'blue': '#4493F0',
          'green': '#21AE95',
          'dim': '#162227',
        },
        //nav
        'nav': {
          'light': 'rgba(236, 236, 236, 0.5)',
          'dark': 'rgba(8, 19, 23, 0.8)',
        },
        //text
        'main': {
          'light': '#577D80',
          'dark': '#D9D9D9',
        },
        'dim': {
          'light': '#799294',
          'dark': '#839297',
        },
        'decor': {
          'light': '#B8C2C6',
          'dark': '#303F44',
        },
      },
      spacing: {
        'none': '0px',
        'page-sm': '15px',
        'page-md': '60px',
        'page-lg': '90px',
        'text-sm': '30px',
        'text-md': '70px',
        'text-lg': '120px',
        'xs': '15px',
        'sm': '30px',
        'md': '60px',
        'lg': '100px',
        'xl': '150px',
        'navWidth': 'calc(100vw - 110px)',
      },
      gridTemplateColumns: {
        'layout': '30px minmax(50px, 1fr) 30px',
      },
      gridTemplateRows: {
        'layout': '30px minmax(0, 1fr) 30px',
        'stack': 'repeat(4, 1fr)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
