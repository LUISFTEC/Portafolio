/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'figma-gradient': 'linear-gradient(135deg, #F24E1E 0%, #FF7262 25%, #F7B500 50%, #0ACF83 75%, #1ABCFE 100%)',
      },
    },
  },
  plugins: [],
}