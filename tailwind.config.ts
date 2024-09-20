import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        brand:{
          100: "#CBD966",
          200: "#7BA65D",
          300: "#588C65",
          400: "#25594B",
          500: "#0D1A26"

        }
      },
      fontFamily: {
        'bruno': ['Bruno Ace SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
