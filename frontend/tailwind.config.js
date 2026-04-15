/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070b14",
        panel: "#101826",
        panelSoft: "#162238",
        accent: "#33d1ff",
        accent2: "#86efac",
        warn: "#f87171",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(51, 209, 255, 0.2), 0 10px 35px rgba(10, 20, 40, 0.5)",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        floatIn: "floatIn 0.45s ease-out forwards",
      },
    },
  },
  plugins: [],
};
