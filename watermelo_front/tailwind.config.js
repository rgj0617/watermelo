//tailwind.config.js

/** @type {import('tailwindcss').Config} */
const spacing = {};
for (let i = 0; i < 3000; i++) {
  spacing[i] = i + "px";
}
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    spacing,
    extend: {
      // 自定义
      backgroundImage: {
        "hero-pattern": "url('/assets/images/勾选@2x.png')",
      },
      colors: {
        "cicc-red": "#640000",
      },
    },
  },
  plugins: [],
};
