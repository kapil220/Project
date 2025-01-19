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
        'custom-green': '#BCE194',
        'custom-yellow': '#FDE282',
        'custom-pink': '#FACAD1',
        'custom-purple': '#FFD100',
      },
    },
  },
  plugins: [],
};
