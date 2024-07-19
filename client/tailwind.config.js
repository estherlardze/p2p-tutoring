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
        xs: "400px",

      },

      backgroundImage: {
        header: "url('/bg-3.jpg')",
        goal: "url('/goal2.jpg')",
        hero: "url('/hero.png')",


      },
    },

    fontFamily: {
      custom: ["Poppins", "sans-serif"],
      slang: ["Playwrite ZA", "cursive"],
    },
    colors: {
      blue: "#042085",
      "blue-100": "#7091E6",
      white: "#fff",
      black: "#000000",
      green: "#3da635",
      "gray-2": "#808080",
      "gray-1": "#505451",
      yellow: "#faa81b"
    },
  },
  plugins: [],
};
