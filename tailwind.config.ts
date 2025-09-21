import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0.0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
      megaWide: "0.25em",
    },
    extend: {
      gridTemplateRows: {
        layout: "auto auto 1fr auto",
      },
      transitionDuration: {
        "2000": "2000ms",
      },
      transitionDelay: {
        "200": "200ms",
      },
      translate: {
        lvw: "100lvw",
      },
    },
  },
  plugins: [],
} satisfies Config;
