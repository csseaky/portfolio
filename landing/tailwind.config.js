module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"],
      },
      colors: {
        blue: {
          linkedin: "#0B66C2",
          postgres: "#2F5E8D",
        },
        red: {
          gmail: "#EA4335",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
