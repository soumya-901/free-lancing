import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-with-image":
          'url("/linearBgImage.svg"), linear-gradient(116.91deg, #0075C2 0.92%, #002136 96.56%)',
        "gradient-with-sm-image":
          'url("/linearDesign.svg"), linear-gradient(116.91deg, #0075C2 0.92%, #002136 96.56%)',
      },
      backgroundPosition: {
        "image-left": "left center", // Position the image on the left
      },
      backgroundSize: {
        "image-size": "50px", // Adjust this to the actual size of your image
      },
      backgroundColor: {
        seoblue: "#0385DB",
        lightdark: "#757575",
      },
      width: {
        maxWidthSeo: "80vw",
      },
      textColor: {
        white: "white",
        seodark: "#2C2C2C",
        seoblue: "#0385DB",
        exdark: "#000000",
        exblue: "#00628C",
        light: "#3C3C43B0",
        green: "#00C850",
        lightdark: "#757575",
      },
      fontFamily: {
        defaut: "Poppins",
      },
      fontSize: {
        "1xl": [
          ".9rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        "2xl": [
          "1.2rem",
          {
            lineHeight: "1.4rem",
            letterSpacing: "0.02em",
            fontWeight: "400",
          },
        ],
        "3xl": [
          "1.4rem",
          {
            lineHeight: "1.60rem",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "4xl": [
          "2.2rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "5xl": [
          "3.5rem",
          {
            lineHeight: "3.25rem",
            letterSpacing: "0.02em",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
