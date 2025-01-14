module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#9333EA",
          600: "#7C3AED",
        },
        gray: {
          800: "#1F2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};