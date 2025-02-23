/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        recoletaRegular: ["recoletaRegular", "sans-serif"],
        recoletaMedium: ["recoletaMedium", "sans-serif"],
        recoletaSemiBold: ["recoletaSemibold", "sans-serif"],
        recoletaBold: ["recoletaBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
