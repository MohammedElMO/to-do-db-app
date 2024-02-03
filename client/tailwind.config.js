/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-barry": {
          hot: "#6C22A6",
          cold: "#6962AD",
        },
        tea: {
          cool: "#83C0C1",
          forest: "#0D9276",
        },
      },

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
