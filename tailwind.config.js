
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e1628",
        primary: "#f97316",
        secondary: "#111b30"
      }
    }
  },
  plugins: []
};
