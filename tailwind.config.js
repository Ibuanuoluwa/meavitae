/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#8686C3",
        primaryFont: "#1C1C1C",
        secondaryFont: "#8D8D8D",
        lightPurple: "#EFEDFF",
        lightGray: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
