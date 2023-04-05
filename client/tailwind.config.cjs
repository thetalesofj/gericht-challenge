/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,html}",
    "./public/*.{js,jsx,ts,html}",
    "./src/*.{js,jsx,ts,html}",
  ],
  theme: {
    screens: {
      'sm': '280px',
      'mobile': '300px',
      'tablet': '600px',
      'laptop': '800px',
      'desktop': '1024px',
      'large': '1240px',
    },
    fontSize: {
      xs: ['8px'],
      xsm: ['10px'],
      sm: ['14px'],
      base: ['16px'],
      lg: ['18px'],
      xl: ['20px'],
      '2xl': ['24px'],
      '3xl': ['30px'],
      '4xl': ['36px'],
      '5xl': ['48px'],
      '6xl': ['60px'],
      '7xl': ['90px'],
      '8xl': ['96px'],
      '9xl': ['128px'],
    },
    fontFamily: {
      "para": "Open Sans, Sans-Serif",
      "titles": "Cormorant-Upright",
      "signiture": "Bestermind, Sans-Serif",
    },
    extend: {
      colors: {
        'background': '#0C0B08',
        'gold': '#DCCA87'
      },
      backgroundImage: {
        'image': "url('./assets/background.jpg')"
      },
      zIndex: {
        '1': '1',
      },
      animation: {
        'spin-slow': 'wiggle 7s linear infinite',
      },
      keyframes: {
        wiggle: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
}
