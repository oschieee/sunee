   // tailwind.config.js
   module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.css", // Ensure it scans all CSS files in src for @tailwind directives
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  