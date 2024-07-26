/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D1117",
        secondary: "#161B22",
        light: "#8B949E",
        white: "#FFFF",
      },
      dropShadow: {
        "c-drop": ["0 35px 35px #0D1117", "0 15px 100px #161B22"],
      },
      width: {
        '35rem': '35rem',
      },
      height: {
        '35rem': '35rem',
      },
    },
  },
  plugins: [],
};
