import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        black:{
          DEFAULT: '#000',
          100: '#000319'
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #161A31, #06091F)',
        'header-gradient': 'linear-gradient(to right, #04071D, #0C0E23)',
      },
      borderRadius: {
        'custom-header-lg': '3rem', // Replace with your desired border radius value
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        spotlight: {
          '0%': {
            opacity: '0',  // Changed to string
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',  // Changed to string
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
      },
    },

  },
  plugins: [],
};
export default config;
