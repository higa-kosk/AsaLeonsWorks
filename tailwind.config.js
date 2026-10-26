const { transform } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollDown: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-72.5%)' }, // 画像の縦幅の半分だけ上にスライド
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        'scroll-down': 'scrollDown 20s linear infinite', // 12秒かけてゆっくり往復
      },
    },
  },
  plugins: [],
}
