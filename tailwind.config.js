/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "tanpink": "#C7A27B",
      "textbrown": "#4E3229",
      "borderwhite": "#D9D9D9",
      "paragraphtext": "#8D604E",
      "graybrown": "#3C3934",
      "buttoncolor": "#DEC491",
    },
    borderRadius: {
      "extra": '94px'
    }
  },
  plugins: [],
};
