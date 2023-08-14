/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center:true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'louis-red':'#eb2f06',
        'louis-redtwo':'#e55039',
        'louis-ıceland':'#fa983a',
        'louis-good':'#3c6382',
        'louis-forest':'#0a3d62',
        'louis-melon':'#f8c291',
        },
    },
  },
  plugins: [],
};

