module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#42f5d4",
        "primary-hover": "#0ac2a0",
        secondary: "#702fba",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
