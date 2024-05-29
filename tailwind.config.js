/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redGradientStart: '#ED1D1D',
        redGradientEnd: '#3B1717',
      },
    },
  },
  plugins: [],
}

