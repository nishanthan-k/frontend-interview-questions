// tailwind.config.js

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: {
          DEFAULT: "var(--textColor)",
        },
        bgColor: {
          DEFAULT: "var(--bgColor)",
        },
        buttonColor: {
          DEFAULT: "var(--buttonColor)",
        },
      },
    },
  },
  plugins: [],
};
