/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter"],
    },
    extend: {
      colors: {
        primary: "var(--colorPrimary)",
        secondary: "var(--colorSecondary)",
        blue: {
          btnHover: "var(--blueBtnHover)",
        },
        green: {
          btnHover: "var(--greenBtnHover)",
        },
        default: "#ffffff",
        white: {
          btnHover: "var(--whiteBtnHover)",
        },
        error: "var(--colorErr)",
        textPrimary: "var(--colorTextPrim)",
        textSecondary: "var(--colorTextSecond)",
      },
    },
  },
  plugins: [],
};
