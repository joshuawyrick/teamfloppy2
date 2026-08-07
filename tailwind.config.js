/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          blue: '#2759A5',
          sky: '#DCE9FB',
          mist: '#F2F6FC',
          red: '#E6292F',
          white: '#FFFFFF',
          ink: '#1A2234',
        },
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(11,31,58,.18)',
      },
      minHeight: {
        13: '3.25rem',
      },
    },
  },
  plugins: [],
};
