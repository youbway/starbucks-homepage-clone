module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#006341"
      },
      translate: {
        '2full': '200%',
      },
      spacing: {
        'slide': '32rem',
        'slides': '39.6875rem',
        'red-cups': '70vh'
      },
      variants: {
        boxShadow: ['responsive', 'hover', 'focus', 'active'],  
     },  
    },
  },
  plugins: [],
}
