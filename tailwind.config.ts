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
        'scale-rotate': {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1) rotate(-10deg)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'scale(1) rotate(-10deg)',
            opacity: '1',
          },
        },
      },
      animation: {
        'stain-animation': 'scale-rotate 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
