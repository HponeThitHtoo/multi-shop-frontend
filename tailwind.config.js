/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
      },
      colors: {
        primary: "#FFD333",
        primaryHover: "#ffc800",
        secondary: "#F5F5F5",
        darkPrimary: "#3D464D",
        darkSecondary: "#6C757D",
      },
      backgroundImage: {
        offerImageOne: "url('./src/assets/images/offer-1.jpg')",
        offerImageTwo: "url('./src/assets/images/offer-2.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
