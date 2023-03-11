/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "t-color": "#3F3F3F",
        "t-secondary": "#2D2525",
        "btn-bg": "#C58852",
        backg: "#222A2E",
      },
    },
  },
  plugins: [],
};
