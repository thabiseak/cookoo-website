/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cookoo-red': '#e60023',
        'cookoo-pink': '#D91457',
        'cookoo-gray': '#777',
        'cookoo-text-gray': '#888',
        'cookoo-dark-gray': '#222',
        'cookoo-light-gray': '#555',
        'cookoo-border-gray': '#ddd',
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'Roboto', 'Arial', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'cookoo-card': '0 2px 12px rgba(0, 0, 0, 0.05)',
        'cookoo-stats': '0px 2px 15px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
