/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#C2EAF3',
        'custom-orange': '#FBF5E7',
      },
    },
  },
  plugins: [],
};
