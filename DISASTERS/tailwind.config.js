/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: "#71717A",
        zinc200: "#E4E4E7",
        zinc100: "#F4F4F5",
      }
    },
  },
  plugins: [],
}

