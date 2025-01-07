module.exports = {
  content: ['./src/pages/**/*.html', './src/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e5edff', 
          500: '#1e40af',
          600: '#1e3a8a',
          700: '#172554',
        },
        secondary: {
          50: '#fff7e6',
          100: '#ffefcc',
          500: '#b7791f',
          600: '#975a16',
          700: '#854d0e',
        },
        gray: {
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': ['1rem', '1.5'],
        'lg': ['1.125rem', '1.75'],
        'xl': ['1.25rem', '1.75'],
        '2xl': ['1.5rem', '2'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
