/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "0px", max: "640px" }, // mobile view 
      smmd: { min: "641px", max: "767px" }, // small tablets
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" }, // ipad view 
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" }, // laptop
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1440px" }, //  desktop
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1441px", max: "1536px" }, // large desktop
      // => @media (min-width: 1536px) { ... }
      "3xl": "1537  px", // 4k screen 
    },
    boxShadow: {
      ctr: "12px 12px 12px 1px rgb(0 0 0 / 0.1)",
    },
    fontSize: {
      sm: "12px",
      tiny: "13px",
      base: "14px",
      title: "13.5px",
      h6: "16px",
      h5: "18px",
      h4: "20px",
      h3: "22px",
      h2: "24px",
      h1: "36px",
    },
    colors: {
      'primary': 'hsl(246, 80%, 60%)',
      'secondary': 'hsl(15, 100%, 70%)',
      'soft-blue': 'hsl(195, 74%, 62%)',
      'light-red': 'hsl(348, 100%, 68%)',
      "lime-green ": "hsl(145, 58%, 55%)",
      "violet": "hsl(264, 64%, 52%)",
      "soft-orange": "hsl(43, 84%, 65%)",
      'very-dark-blue': 'hsl(226, 43%, 10%)',
      'desaturated-blue': 'hsl(235, 45%, 61%)',
      'pale-blue': 'hsl(236, 100%, 87%)',
      'white': '#fff',
    },

    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {},
  },
  plugins: [],
};