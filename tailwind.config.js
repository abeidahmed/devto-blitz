// tailwind.config.js
module.exports = {
  purge: ["{app,pages}/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "offset-black": "4px 4px 0 #000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
