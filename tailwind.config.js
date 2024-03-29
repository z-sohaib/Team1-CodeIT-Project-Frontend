/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        "learnplat-yellow": "#F6A018",
        "learnplat-gray": "#C4C4C4",
        "learnplat-second-gray": "#A7A5A5",
        "learnplat-light": "#F0EFE9",
        "learnplat-yellow-light": "#F9D783", 
        "learnplat-gray-card": "#5D5C59",
        "learnplat-dark": "#2F2E41",
        "learnplat-second-yellow": "#F9D783",
        "learnplat-second-orange": "#FABB57",
        "learnplat-third-orange": "#F9D783",
        "learnplat-third-gray": "#A7A5A5"
      },
    },
    fontFamily: {
      Rubik: ["Rubik, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    Card: {
      center: true,
      padding: "0px",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}
