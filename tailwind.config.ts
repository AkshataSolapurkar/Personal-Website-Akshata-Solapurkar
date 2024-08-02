import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'custom-cubic': 'cubic-bezier(0.02, 0.01, 0.47, 1)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'bg-light-yellow': '#F2F2EE',
        'bg-light-blue': '#EDF2FF',
        'bg-light-red': '#F2EEEE',
        'light-yellow': '#FFF6C5',
        'yellow': '#F8C231',
        'orange': 'rgba(255, 105, 40, 0.8)',
        'light-red': '#FFC5CF',
        'red': '#FF141E',
        'green': 'rgba(0, 187, 131, 0.8)',
        'light-green': '#BEFFEC',
        'pink': 'rgba(255, 90, 209, 0.9)',
        'selection-sky': '#00FFFF',
        'selection-pink': '#f81ce5',
        'light-pink': '#FFE9FA',
        'blue': 'rgba(5, 96, 255, 0.8)',
        'light-blue': '#B7F2FF',
        'white': '#FFFFFF',
        'white-bg': '#FFFFFF',
        'black-text': '#22242C',
        'black-bg': '#22242C',
        'white20': '#ecedee',
        'white-text': '#ecedee',
        'gray': '#687076',
        'black': '#0a0a0d',
        'light-black': 'rgba(0, 0, 0, .05)',
        'light-white': 'rgba(255, 255, 255, .05)',
        'tag-black': 'rgba(0, 0, 0, .5)',
        'tag-white': 'rgba(255, 255, 255, .8)',
        'nav-bg': 'rgba(28, 22, 47, .3)',
        'nav-sm': 'rgba(28, 22, 47)',
        "light-grey":"rgba(114,120,136,.6)"

      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
  },
  plugins: [],
}
}
export default config;
