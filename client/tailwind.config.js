/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        // Sets the custom breakpoints for the project
        xxs: "320px",
        xs: "375px",
        sm: "412px"
      },
      colors: {
        // Sets the custom colors for the project
        myColor: {
          1: "#606c38",
          2: "#283618",
          3: "#fefae0",
          4: "#dda15e",
          5: "#bc6c25",
          6: "#ccd5ae",
          7: "#e9edc9",
          9: "#faedcd",
          10: "#d4a373",
          black: "#000000",
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
});