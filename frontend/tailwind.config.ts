import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        limon: "#FDB913",
        ou: {
          maroon: "#8B1B41",
          blue: "#003B7A",
        },
      },
    },
  },
  plugins: [],
};
export default config;

