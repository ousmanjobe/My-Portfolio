import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ailerons: ["var(--font-ailerons)", "Arial", "Helvetica", "sans-serif"],
        avenir: ["var(--font-avenir)", "Arial", "Helvetica", "sans-serif"],
        urbanist: ["var(--font-urbanist)", "Arial", "Helvetica", "sans-serif"],
        urbanistItalic: ["var(--font-urbanist-italic)", "Arial", "Helvetica", "sans-serif"],
        nagasaki: ["var(--font-nagasaki)", "Arial", "Helvetica", "sans-serif"],
        dongpora: ["var(--font-dongpora)", "Arial", "Helvetica", "sans-serif"],
        kalam: ["var(--font-kalam)", "cursive"],
        barcode: ["var(--font-barcode)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
