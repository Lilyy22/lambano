/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tailwind: ["Inter", "san-serif"],
      },
      colors: {
        "custom-dark": {
          500: "#111a32",
        },
        "custom-white": {
          500: "#DFE0E2",
        },
        "custom-purple": {
          500: "#9333ea",
        },
      },
    },
  },
  plugins: [],
};
