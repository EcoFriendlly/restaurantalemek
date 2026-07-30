/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B0000",   // אדום בורדו עמוק
        secondary: "#D4AF37", // זהב יוקרתי
        dark: "#1A1A1A",      // שחור מודרני
        light: "#F9F9F9"      // רקע בהיר לרקעים
      },
    },
  },
  plugins: [],
}