/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Trebuchet MS"', "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#794cff",
          yellow: "#ffe500",
          gold: "#f1a700",
          amber: "#f0a900",
        },
      },
    },
  },
  plugins: [],
};
