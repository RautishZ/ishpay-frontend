/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ishprimary: {
          DEFAULT: '#AD1E23',
          100: '#F5D4D5',
          200: '#EBAAAB',
          300: '#E18082',
          400: '#D65558',
          500: '#AD1E23',
          600: '#7A1619',
          700: '#580E11',
          800: '#370609',
          900: '#160202',
        },
        secondary: {
          DEFAULT: '#EE7D00',
          100: '#FFE0CC',
          200: '#FFB399',
          300: '#FF8666',
          400: '#FF5933',
          500: '#EE7D00',
          600: '#B35D00',
          700: '#804200',
          800: '#4D2800',
          900: '#1A0F00',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
