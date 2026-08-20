import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wyn-purple": "#2E1065",
        "wyn-purple-dark": "#1F0A47",
        "wyn-purple-accent": "#9570FF",
        "wyn-gold": "#F5A623",
        "wyn-gold-dark": "#E8961E",
        "wyn-yellow": "#F5AD12",
        "wyn-lavender": "#B8A6F0",
        "wyn-cream": "#F5F3FF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
