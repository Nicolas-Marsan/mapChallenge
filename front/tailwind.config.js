module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': "100px",

      'sm': "640px",

      'md': "768px",

      'lg': "1024px",

      'xl': "1280px",
    },

    extend: {
      colors: {
        nico: {
          1000: "#EED09D",
          500: "#D5FEAB",
        },
      },
      boxShadow: {
        "3xl": "30px 40px 10px 10px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        fondoHome: "url('./src/img/381549.jpg')",
      },
    },
  },
  plugins: [],
};
