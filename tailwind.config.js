module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      Pacifico: ["Pacifico", "open-sans"],
      Mochiy: ['"Mochiy Pop P One"', "sans-serif"],
      FiraSans: ['"Fira Sans"', "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
