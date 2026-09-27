import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0d",
        bg2: "#141416",
        card: "#18181b",
        border: "#26262a",
        accent: "#f5d90a",
        "accent-dim": "#7a6f05",
        muted: "#9b9ba3",
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
