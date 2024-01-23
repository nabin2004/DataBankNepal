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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

