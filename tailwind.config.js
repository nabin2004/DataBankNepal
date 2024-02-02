module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        'crimson': '#A41034',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'devnagari': ['Tiro Devanagari Hindi']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
