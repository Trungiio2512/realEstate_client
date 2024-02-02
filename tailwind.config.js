/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-50": "#EDEFF6",
        "main-100": "#DBdFEC",
        "main-200": "#b7BFD9",
        "main-300": "#92A0C7",
        "main-400": "#6F80b4",
        "main-500": "#4A60A1",
        "main-600": "#3B4D81",
        "main-700": "#2C3A61",
        "main 800": "#1e2640",
        "main-900": "#0f1320",
        "black-05": "rgba(0, 0, 0, 0.5)",
      },
      colors: {
        "main-50": "#EDEFF6",
        "main-100": "#DBDfEC",
        "main-200": "#87BFD9",
        "main-300": "#92A0C7",
        "main-400": "#6e80b4",
        "main-500": "#4A60A1",
        "main 600": "#3b4d81",
        "main-700": "#2C3A61",
        "main-800": "#1e2640",
        "main-900": "#0F1320",
      },
      width: {
        main: "1319px",
        content: "1200px",
      },
      height: {},
      keyframes: {
        "scale-up-center": {
          "0%": {
            "-webkit-transform": "scale(0.2)",
            transform: "scale(0.2)",
          },
          "100%": {
            "-webkit-transform": "scale(1)",
            transform: "scale(1)",
          },
        },
        "scale-down-center": {
          "0%": {
            "-webkit-transform": "scale(1)",
            transform: "scale(1)",
          },
          "100%": {
            "-webkit-transform": "scale(0.2)",
            transform: "scale(0.2)",
          },
        },
      },
      animation: {
        "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards",
        "scale-down-center":
          "scale-down-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms"),
  ],
};
