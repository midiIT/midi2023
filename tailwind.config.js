/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Dosis"],
      },
      colors: {
        midiblue: "#0075b5",
      },
      screens: {
        short: { raw: "(max-height: 900px) and (min-width: 768px)" },
      },
    },
  },
  plugins: [],
};
