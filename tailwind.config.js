module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00587a",
        yellowclaw: "#FFB523",
      },
    },
  },
  variants: {
    extend: { fontWeight: ["hover", "focus", "active"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
