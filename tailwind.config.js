/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'authBackground':'#1B1B1B',
        'dashboardLogoBackground':'#31353f',
        'main':'#83BA9B',
        'contentBackground':'#1b2028',
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
      height:{
        '150px':'150px',
        '375px':'23.438rem',
        'inherit':'inherit',
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
      borderRadius: {
        '10': '10px',
      },
    },
  },
  plugins: ['tailwindcss-gap'],
}

