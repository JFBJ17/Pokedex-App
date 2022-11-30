/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#FF4500',
          main: '#FF8C00',
          light: '#FFA500'
        },
        secondary: '#2F4F4F'
      }
    }
  },
  plugins: []
}
