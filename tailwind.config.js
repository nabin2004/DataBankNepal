/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson': '#A41034',
      },
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'devnagari' :['Tiro Devanagari Hindi']
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

