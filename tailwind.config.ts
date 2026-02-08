import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-public-sans)'],
      },
      colors: {
        grey: {
          0: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#C4CDD5',
          500: '#919EAB',
          600: '#637381',
          700: '#454F5B',
          800: '#212B36',
          900: '#161C24',
        },
        background: {
          DEFAULT: '#141a21',
          paper: '#1C252E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#919eab',
        },
        primary: {
          lighter: '#D1FBE0',
          light: '#5BE584',
          DEFAULT: '#00a76f',
          dark: '#007867',
          darker: '#004B50',
          contrastText: '#FFFFFF',
        },
        secondary: {
          lighter: '#D6E4FF',
          light: '#84A9FF',
          DEFAULT: '#3366FF',
          dark: '#1939B7',
          darker: '#091A7A',
          contrastText: '#FFFFFF',
        },
        info: {
          lighter: '#CAFDF5',
          light: '#61F3F3',
          DEFAULT: '#00b8d9',
          dark: '#006C9C',
          darker: '#003768',
          contrastText: '#FFFFFF',
        },
        success: {
          lighter: '#E9FCD4',
          light: '#AAF27F',
          DEFAULT: '#54D62C',
          dark: '#229A16',
          darker: '#08660D',
          contrastText: '#212B36',
        },
        error: {
          lighter: '#FFE9D5',
          light: '#FFAC82',
          DEFAULT: '#ff5630',
          dark: '#B71D18',
          darker: '#7A0916',
          contrastText: '#FFFFFF',
        },
        warning: {
          lighter: '#FFF7CD',
          light: '#FFE16A',
          DEFAULT: '#FFC107',
          dark: '#B78103',
          darker: '#7A4F01',
          contrastText: '#212B36',
        },
      },
      boxShadow: {
        card: '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
        dropdown: '0 0 2px 0 rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      }
    },
  },
  plugins: [],
};
export default config;