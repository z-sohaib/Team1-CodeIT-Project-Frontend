/* eslint-disable prettier/prettier */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '35px',
    }, 
    extend: {
      colors: {
        "learnplat-yellow": "#F6A018",
        "learnplat-gray": "#C4C4C4",
        "learnplat-second-gray": "#A7A5A5",
        "learnplat-light": "#F0EFE9",
        "learnplat-dark": "#2F2E41", 
        "learnplat-yellow-light": "#F9D783", 
        "learnplat-gray-card": "#5D5C59",

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
