import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carosaGreen: "#8BC53F",
        carosaBlue: "#1E4596",
        ink: "#111111",
        glass: "rgba(255,255,255,0.72)",
      },
      boxShadow: {
        luxury: "0 22px 70px rgba(16, 39, 90, 0.16)",
        float: "0 26px 55px rgba(0, 0, 0, 0.18)",
        card: "0 14px 34px rgba(30, 69, 150, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};

export default config;
