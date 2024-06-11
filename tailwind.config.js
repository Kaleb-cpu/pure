/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      colors: {
        'primary': '#050505',
        'secondary': '#E9D3C0',
        'teritary': '#FFFFFF',
        'fourth': '#544234'
      },

      fontFamily: {
        'button': ['Raleway'],
        'Inter': ['Inter'],
        'Nunito': ['Nunito'],
        'Geez': ["Noto Serif Ethiopic"]
      },
      gridTemplateColumns: {
        'mainLayoutCol': '20%, 1fr',
        'responsiveLayout': '15%, 1fr'
      },
      gridTemplateRows: {
        'mainLayoutRow': '8%, 1fr, 5%',
        'sideBarLayoutRow': '1%, 1fr, 50%',
        
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-hamburgers')
  ],
  
};
