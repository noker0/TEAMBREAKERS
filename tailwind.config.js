/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'solid': '-10px -10px 0px rgba(225, 225, 225, 100)',
        'solid-dop': '-15px -15px 0px rgba(225, 225, 225, 100)',
        'solid-top': '-15px 15px 0px rgba(225, 225, 225, 100)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
