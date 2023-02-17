/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sen: "Assistant",
      },
      colors: {
        primary: "#232536",
        secondary: "#FFD050",
        gray: "#6D6E76",
        darkGray: "#4C4C4C",
        lightYellow: "#FBF6EA",
        purple: "#592EA9",
        lavender: "#F4F0F8",
        btnHover: "#EDC14A",
      },
    },
  },
  plugins: [],
};
