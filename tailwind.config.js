/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#E8ECF1",
        "primary-brown": "#444444",
        "primary-blue": "#A0C1FF",
        "second-gray": "#BEBEBE",
        "third-gray": "#F2F2F2"
      },

      fontFamily: {
        sansRoboto: ['Roboto', 'sans-serif'],
        sansRobotoCondensed: ['Roboto Condensed', 'sans-serif'],
        sansInter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

