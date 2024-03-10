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
      "tanpink":  "#2B2726", // "#5d0404", // "#810404",// "#9f8c5d", // "#C7A27B",
      "textbrown":  "#C09D70", //"#e8e1d9", // "#4E3229",
      "borderwhite": "#D9D9D9",
      "paragraphtext": "#FFFFFF", // "#e8e1d9", //"#8D604E",
      "graybrown": "#221E1D", // "#000000", // "#302d2f", //"#3C3934",
      "buttoncolor": "#c09d70", // "#DEC491",
    },
    borderRadius: {
      "extra": '94px'
    }
  },
  plugins: [],
};
