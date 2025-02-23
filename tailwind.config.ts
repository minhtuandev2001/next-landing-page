import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        quaternary: "var(--quaternary)",
        quinary: "var(--quinary)",
        senary: "var(--senary)",
        septenary: "var(--septenary)",
        octonary: "var(--octonary)",
        nonary: "var(--nonary)",
        denary: "var(--denary)",
        duodenary: "var(--duodenary)",
        vigenary: "var(--vigenary)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
