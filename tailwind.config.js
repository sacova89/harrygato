// tailwind.config.js
module.exports = {
  mode: "jit",
  darkMode: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-about': "url('../src/assets/portfolio_images/pattern.svg')"
      }
    },
  },
  plugins: [],
};
