/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cta: {
          blue: "#0099ff",
          sky: "#00bbff",
        },
        black_primary: "#ccc",
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
