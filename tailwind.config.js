/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        primary: "#ec4899",
        secondary: "#16f2b3",
        text: "#ffffff",
        "muted-foreground": "#94a3b8",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        nun: ["Nunito", "sans-serif"],
        fun: ["Funnel Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(93,163,255,0.5)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [require("@codaworks/react-glow/tailwind")],
};
