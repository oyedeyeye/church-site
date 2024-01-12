/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '1000px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif' ,"Josefin Sans"],
      serif: ['Merriweather', 'serif'],

      
    },
    
    extend: {
      colors: {
        gray:{
          100:"#C4C4C4",
          200:"#939393",
          300:"#8A8A8A"
        },
        blue:"#002171",
        white:"#FFFFFF",
        black:"#000000",
        btn:"#EDF5FF"
        
      },
    },
  },
  plugins: [],
};

