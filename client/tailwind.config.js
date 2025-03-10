/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        slowbounce: "bounce 3s infinite",
        fastbounce: "bounce 0.5s infinite",
        wave: "wave 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
