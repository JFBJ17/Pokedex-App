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
      },
      backgroundColor: {
        steelType: '#CCCCCC',
        waterType: '#B0E2FF',
        bugType: '#99CC33',
        dragonType: '#AB82FF',
        electricType: '#FFD700',
        ghostType: '#778899',
        fireType: '#FF7F00',
        fairyType: '#FFB0FF',
        iceType: '#ADD8E6',
        fightingType: '#FF6A6A',
        normalType: '#DDCCAA',
        grassType: '#99FF66',
        psychicType: '#FFB5C5',
        rockType: '#CD853F',
        darkType: '#A9A9A9',
        groundType: '#DEB887',
        poisonType: '#CC88BB',
        flyingType: '#BAAAFF'
      }
    }
  },
  plugins: []
}
