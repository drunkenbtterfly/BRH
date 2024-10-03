/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
      fontVariationSettings: {
        auto: 'font-optical-sizing: auto', // Menambahkan setting optical sizing
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 300s linear infinite',
      },
      boxShadow: {
        'inset': 'inset 0px 15px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
