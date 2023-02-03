/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '3rem',
        lg: '5rem',

      }
    },
    extend: {
      colors: {
        primary: {
          100: '#C2FFEE',
          200: '#2AD3A5'
        },
        secondary: '#FAB005'
      }
  },
variants:{
  
  },
},
  
  plugins: [],
}
