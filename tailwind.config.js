/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary_bg: "#6a5eee",
        primary_text: "#6a5eee",
        primary_bg_hover: "#5548e3"
      }
    },
  },
  plugins: [],
}

