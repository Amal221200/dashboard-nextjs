import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        sidebar_gradient: "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
        secondary_gradient: "linear-gradient(180deg, #4285F4 0%, #3C83F9 100%)",
      },
      colors: {
        primary: "#F8FAFF",
        secondary: "#4285F4",
        link: "#346BD4"
      },
      backgroundColor: {
        primary: "#F8FAFF",
        secondary: "#4285F4",
      },
      boxShadow: {
        card_shadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.10)",
      }
    },
  },
  plugins: [],
}
export default config
