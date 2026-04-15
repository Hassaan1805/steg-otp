/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#121019",
        panel: "#1a1623",
        panelSoft: "#201b2b",
        accent: "#e945f5",
        accentMid: "#6f6f6f",
        accentEnd: "#6a6a6a",
        warn: "#f87171",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(233, 69, 245, 0.28), 0 14px 42px rgba(40, 20, 50, 0.52)",
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
