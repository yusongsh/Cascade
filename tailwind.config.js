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
        "second-grey": "#999999",
        "main-gold": "#C2936A",
        "main-bg-service": "#5E5D5C",
      },
    },
    plugins: [],
  },
};
