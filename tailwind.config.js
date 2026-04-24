/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-gibson)', 'sans-serif'],
      },
    },
     screens: {
      xxss: "320px",
      "4xs": "360px",
      "3xs": "375px",
      "2xs": "414px",
      xs: "480px",
      sm: "576px",
      md: "768px",
      "2md": "834px",
      lgs: "991px",
      lg: "1024px",
      "2lg": "1200px",
      xl: "1280px",
      "2xl": "1366px",
      "3xl": "1400px",
      "4xl": "1440px",
      "5xl": "1536px",
      "6xl": "1600px",
      "7xl": "1680px",
      "8xl": "1920px",
    },
  },
  plugins: [],
};


