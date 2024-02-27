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
            "gradient-radial":
               "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            "custom-brown": "#D87D4A",
            "custom-almostBlack": "#101010",
            "custom-grey": "#F1F1F1",
            "custom-light-grey": "#FAFAFA",
            "custom-pinkOrange": "#fbaf85",
            "custom-white": "#FFFFFF",
            "custom-black": "#000000",
         },
      },
   },
   plugins: [],
};
export default config;
