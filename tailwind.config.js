module.exports = {
  content: [],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: {
        light: "#333333",
      },
      blue: {
        dark: "#2C4664",
        light: "#EDF1F5",
      },
      green: {
        light: "#C8FF8C",
      },
    },
    
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.5rem",
      "7xl": "5rem",
      "40px": "40px",
      "72px": "72px",
    },
    extend: {
      spacing: {
        7: "1.75rem",
        16: "4rem",
        34: "8.5rem",
        42: "10.5rem",
        100: "25rem",
        142: "35.5rem",
      },
      flex: {
        '2': '2 2 0%'
      },
      padding: {
        "7/10": "70%",
      },
      borderRadius: {
        circle: "50%",
      },
      maxWidth: {
        280: "70rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
      },
      boxShadow: {
        normal: "10px 10px 20px #00000019; ",
      },
    },
  },
  plugins: [],
  purge: ["./pages//*.{js,ts,jsx,tsx}", "./components//*.{js,ts,jsx,tsx}"],
};
