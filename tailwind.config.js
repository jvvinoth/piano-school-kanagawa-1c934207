/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C17B5C',
        secondary: '#8B9D83',
        accent: '#D4894A',
        background: '#FAF7F2',
        surface: '#F0EBE3',
        text: '#2C2420',
        'text-muted': '#6B5D57',
        border: '#E5DDD5',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      maxWidth: {
        '6xl': '72rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
