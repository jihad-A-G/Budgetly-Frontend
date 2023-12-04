/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        authBackground: "#1B1B1B",
        main: "#83BA9B",
        dashboard: "#31353f",
        sidebar: "#1b2028",
        black: "#000"
      },
      backgroundImage: {
        authBackgroundImg: "url('src/assets/authBackground.svg')",
      },
      width: {
        "340px": "21.25rem",
        "86%": "86%",
        "14%": "14%",
        "70%": "70%",
      },
      height: {
        "375px": "23.438rem",
        inherit: "inherit",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        '1/8': '1/8',
      },
      
    },
  },
  plugins: [],
};
