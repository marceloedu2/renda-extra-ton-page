/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/containers/**/*.{ts,tsx}",
    "./src/layout/**/*.{ts,tsx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "16px",
      lg: "32px",
      large: "12px",
      full: "9999px",
    },
    stroke: {
      current: "currentColor",
      active: "#008E5A",
      disabled: "#919DAB",
    },
    extend: {
      colors: {
        display: {
          0: "#FFFFFF",
          50: "#F7FAFD",
          100: "#EFF4F8",
          200: "#E6ECF2",
          300: "#D5DEE8",
          400: "#BCC8D6",
          500: "#919DAB",
          600: "#67707D",
          700: "#424A53",
          800: "#31383F",
          900: "#20252A",
        },
        stone: {
          50: "#E8FEF3",
          100: "#CEFDE5",
          200: "#86FDC1",
          300: "#42EC9A",
          400: "#0FCC7D",
          500: "#00A868",
          600: "#008E5A",
          700: "#00734D",
          800: "#005C41",
          900: "#004033",
        },
        ton: {
          50: "#E9FFE7",
          100: "#CDFFC7",
          200: "#96FD86",
          300: "#43F320",
          350: "#48F924",
          400: "#36E61A",
          450: "#00AD0C",
          500: "#00B800",
          600: "#008C05",
          700: "#006E07",
          800: "#005108",
          900: "#003B08",
        },
        danger: {
          50: "#FDE5E2",
          100: "#FBBDB6",
          400: "#F77B6E",
          500: "#DD4F40",
          700: "#C6322A",
          900: "#830700",
        },
        warning: {
          50: "#FFF7E0",
          100: "#FFE8A3",
          400: "#FFCE5B",
          500: "#F2B417",
          700: "#CF810C",
          900: "#BA6708",
        },
      },
      fontFamily: {
        normal: [
          "Sharon Sans",
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        heading: [
          "Sharon Sans",
          "Gotham Rounded",
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      screens: {
        xxxs: "320px",
        xxs: "360px",
        xs: "478px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1360px",
        "3xl": "1536px",
      },
      spacing: {
        1: "1px",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        36: "36px",
        38: "38px",
        40: "40px",
        48: "48px",
        56: "56px",
        60: "60px",
        64: "64px",
        80: "80px",
        96: "96px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "48px",
        "8xl": "56px",
      },
      lineHeight: {
        1: "16px",
        2: "18px",
        3: "20px",
        4: "24px",
        5: "28px",
        6: "32px",
        7: "36px",
        8: "40px",
        9: "48px",
        10: "56px",
      },
      inset: {
        "-16": "-16px",
        "-32": "-32px",
        "-64": "-64px",
      },
      boxShadow: {
        regular: "0px 2px 8px rgba(103, 116, 129, 0.15)",
        lg: "0px 4px 16px 0px #67748126",
        new: "2px 8px 24px rgba(103, 116, 129, 0.15)",
        channel: "0px 2px 8px rgba(103, 116, 129, 0.15)",
      },
      borderRadius: {
        xxs: "4px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "48px",
        "8xl": "56px",
        "9xl": "64px",
        "10xl": "80px",
      },
    },
  },
  plugins: [],
};
