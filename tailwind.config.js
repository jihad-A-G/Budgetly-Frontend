/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'authBackground':'#1B1B1B',
        'dashboardLogoBackground':'#31353f',
        'main':'#83BA9B',
      },
      backgroundImage:{
        'authBackgroundImg':"url('src/assets/authBackground.svg')",
      },
      width:{
        '340px':'21.25rem',
      },
      height:{
        '150px':'150px',
        '375px':'23.438rem',
        'inherit':'inherit',
      },
      borderWidth:{
        '1':'1px',
      },
      boxShadow:{
        'addBtn':'0 0 0 3px rgb(232, 237, 235)',
      }
    },
  },
  plugins: [],
}

