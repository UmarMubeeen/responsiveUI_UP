/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.html"],
    theme: {
      extend: {
        colors: {
          whiteNew: 'hsl(0, 0%, 100%)',
          stone100: 'hsl(30, 54%, 90%)',
          stone150: 'hsl(30, 18%, 87%)',
          stone600: 'hsl(30, 10%, 34%)',
          stone900: 'hsl(24, 5%, 18%)',
          brown800: 'hsl(14, 45%, 36%)',
          rose800: 'hsl(332, 51%, 32%)',
          rose50: 'hsl(370, 110%, 95%)',

          darkCyan: 'hsl(158, 36%, 37%)',
          extradarkCyan: 'hsl(158, 36%, 25%)',
          cream: 'hsl(30, 38%, 92%)',
          
          // Neutral colors
          veryDarkBlue: 'hsl(212, 21%, 14%)',
          darkGrayishBlue: 'hsl(228, 12%, 48%)',
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'], // Add Inter font family
          youngSerif: ['"Young Serif"', 'serif'], // Add Young Serif as custom font
          outfit: ['"Outfit"', 'sans-serif'],      // Add Outfit

          montserrat: ['"Montserrat"', 'sans-serif'],
          fraunces: ['"Fraunces"', 'serif'],
        },
      },
    },
    plugins: [],
  }
  