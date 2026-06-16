import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        card: "#0a0a0a",
        border: "#1f2937",
        accent: "#67e8f9",
        muted: "#71717a",
      },
    },
  },
  plugins: [],
};
export default config;
