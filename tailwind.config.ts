import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        M_blue: "var(--moderate_blue)",
        SoftRed: "var(--soft_red)",
        LG_blue: "var(--light_grayish_blue)",
        PaleRed: "var(--pale_red)",
        DarkBlue: "var(--dark_blue)",
        GrayishBlue: "var(--grayish_blue)",
        LG: "var(--light_gray)",
        VeryLG: "var(--very_light_gray)",
      },
    },
  },
  plugins: [],
} satisfies Config;
