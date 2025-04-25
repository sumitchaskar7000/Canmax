/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a7c59',
        secondary: '#f0ad4e',
        accent: '#3a5a40',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  safelist: [
    'bg-primary',
    'text-primary',
    'bg-secondary',
    'text-secondary',
    'bg-accent',
    'text-accent',
    'hover:bg-primary',
    'hover:text-primary',
    'hover:bg-secondary',
    'hover:text-secondary',
    'hover:bg-accent',
    'hover:text-accent',
    'container-custom',
    'btn-primary',
    'btn-secondary',
    'section-title',
    'card'
  ],
  plugins: [],
} 