/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlues: "#1D3260",
        brandBlue:"#1376f4",
        brandWhite: "#eeeeee",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    screens: {
      xs: "375px", // สำหรับ iPhone SE / Android ขนาดเล็ก
      sm: "640px", // ค่าเริ่มต้นของ Tailwind
      md: "768px", // สำหรับ Tablet
      lg: "1024px", // สำหรับ Laptop
      xl: "1280px", // สำหรับหน้าจอใหญ่
      "2xl": "1536px", // สำหรับจอขนาดใหญ่พิเศษ
    },
  },
  plugins: [],
};
