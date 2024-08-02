/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors: {
        primary: '#a4b8c4',
        input: '#f9f9f9',
        alert: '#EF4444',
      },
    },
  },
  plugins: [],
};
