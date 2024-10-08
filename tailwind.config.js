/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme Colors
        'dark-bg': '#121212',      // Dark theme background color
        'navbar-bg': '#1B0C4D',    // Navbar background color (dark gray)

        // White shades
        white: {
          default: '#FEFFFF',
          secondary: '#B0BEC5'    // Light gray for text descriptions
        },

        // Black shades
        black: {
          default: '#000000',
          secondary: '#10005A'     // Light blue for default text
        },

        // Button and Highlight Colors
        'brightYellow': '#EAE34A',  // Bright yellow for highlights and buttons
        'deepPurple': '#291B52',     // Deep purple for primary buttons and accents

        // Hero Section Colors
        hero: {
          darkPurple: '#1e0349',    // Deep purple color
          lightPurple: '#352584',    // Lighter purple shade
        }
      },
      fontFamily: {
        inter: ["'Inter', sans-serif"], // Custom font family
      },
    },
  },
  plugins: [],
}
