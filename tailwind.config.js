/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '450px'
        },

      backgroundImage: {
        "header": "url('/bg.jpg')"
      },
      
    },

    fontFamily: {
      custom: ['Poppins', 'sans-serif']
    },
    colors: {
      'blue': '#042085',
      'blue-100': '#7091E6',
      'white': '#fff',
      'black': '#000000',
      'gray' : '#808080',
    }
  },
  plugins: []
};
;
