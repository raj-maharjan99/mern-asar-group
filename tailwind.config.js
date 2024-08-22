/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["YourCustomSans", "Helvetica", "Arial", "sans-serif"],
        serif: ["YourCustomSerif", "Georgia", "serif"],
        mono: ["YourCustomMono", "Menlo", "monospace"],
      },
    },
    screens: {
      sm: "540px",
      mobile: { max: "539px" },
      md: "720px",
      lg: "960px",

      xl: "1140px",
      xxl: "1320px",
    },
    plugins: [],
  },
});

// /** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {},
//     screens: {
//       xl: { max: "1280px" },
//       lg: { max: "1024px" },
//       md: { max: "768px" },
//       sm: { max: "640px" },
//     },
//   },
//   plugins: [],
// });

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {},

//     screens: {
//       xxl: { max: "1536px" },
//       xl: { max: "1280px" },
//       lg: { max: "1024px" },
//       md: { max: "768px" },
//       sm: { max: "640px" },
//     },
//   },
//   plugins: [],
// };
