/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EEAA2F',
        secondly: '#EDD6B7',
        thirdly: '#AE2D2A',
        input: '#f9f9f9',
        alert: '#EF4444',
        'blue-ocean': '#a4b8c4',
      },
    },
  },
  plugins: [],
};
