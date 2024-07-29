import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'font': '#EEEDEB',
        'bg': '#2F3645',
      },
      backdropBlur: {
        '10': '20px',
      },
      backgroundImage: {
        'pen-strike': 'radial-gradient(circle, rgba(255, 255, 0, 0.5) 20%, rgba(255, 255, 0, 0) 80%)',
      },
      keyframes: {
        scalePic: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.1)' },
        },
        },
        animation: {
          scalePic: 'scalePic 1s linear  1',
        },
      },
  },
  plugins: [],
};

export default config;
