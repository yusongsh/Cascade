/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleBig: ["Cinzel", "serif"],
        title: ["Poppins", "sans-serif"],
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        "main-grey": "#474a4a",
        "main-gold": "#C2936A",
      },
    },
    plugins: [],
  },
};
