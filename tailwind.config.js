/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      colors: {
        primary: {
          profileBoxBg: "#181818",
          textColor: "#BCBCBC",
          secondBlack: "	#313131",
          thirdBlack: "#4b4b4b",
        },
        secondary: {},
        navbar_text: "#676767",
        text_white: "#ffffff",
        btn: "#323232",
        btn_hover: "#fff",
        backgroundColor: "#54595F",
      },
    },
  },
  plugins: [],
};
