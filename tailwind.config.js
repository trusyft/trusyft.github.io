/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html'
  ],
  // darkMode: 'media',
  theme: {
    extend: {
      // typography: {...},
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        serif: ["IBM Plex Serif", "ui-serif", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}
