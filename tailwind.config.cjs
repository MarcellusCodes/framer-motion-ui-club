/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cta: {
          blue: "#0099ff",
          sky: "#00bbff",
        },
        black: "#1F2023",
        grey: "#dbdde1",
      },
    },
    fontFamily: {
      primary: ["Amiko", "sans-serif"],
      secondary: ["Tajawal", "sans-serif"],
    },
  },
  plugins: [],
};
