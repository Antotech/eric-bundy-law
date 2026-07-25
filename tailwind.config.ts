import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#061A2F",
        navyLight: "#0B2C4B",
        gold: "#D9A441",
        goldLight: "#F0C875",
        ivory: "#F7F3EA"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(6,26,47,.16)"
      }
    }
  },
  plugins: []
};

export default config;
