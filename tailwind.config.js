/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Lobster': ['Lobster'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        pacifico: ["Pacifico", "system-ui"]

    }
    },
  },
  plugins: [],
}

