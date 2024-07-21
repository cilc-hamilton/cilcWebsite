/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cilcblue": "#57ABC4",
        "cilcdarkblue": "#358097",
        "cilcgreen": "#BDD84F",
        "cilcpurple": "#493C97",
        "cilcred": "#DB1928",
      }
    },
  },
  plugins: [],
}