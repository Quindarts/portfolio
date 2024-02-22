import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'regal-blue': 'red',
      },
      width: {
        "1/6-gap-5": 'calc(16.666667% - 20px)',
        "1/4-gap-5": 'calc(25% - 20px)',
        "1/3-gap-5": 'calc(33.33333% - 20px)',
        "1/2-gap-5": 'calc(50% - 20px)',
        "1/3-gap-7": 'calc(33.3% - 28px)',
        "1/2-gap-7": 'calc(50% - 28px)',
      }
    },
  },
  plugins: [],
};
export default config;
