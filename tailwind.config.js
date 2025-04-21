/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#2D6A4F', // Primary forest green
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        brown: {
          500: '#8B5E34', // Earth brown
        },
        blue: {
          600: '#4361EE', // Sky blue
        },
        orange: {
          500: '#FF9F1C', // Sunset orange
        },
        red: {
          500: '#E63946', // Berry red
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};