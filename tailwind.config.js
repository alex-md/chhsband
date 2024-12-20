module.exports = {
  purge: ['./src/pages/**/*.html', './src/js/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Dark Green
        primary: '#047857',
        secondary: '#F59E0B', // Amber
        accent: '#10B981', // Emerald
        background: '#F3F4F6', // Cool Gray
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
