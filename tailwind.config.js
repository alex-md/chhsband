module.exports = {
  purge: ['./src/pages/**/*.html', './src/js/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark Blue
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