/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#fff8f0',
          100: '#f3ece2',
          200: '#eee4d7',
          300: '#e8dbc9',
        },
        forest: {
          DEFAULT: '#3e546d',
          dark:    '#243344',
          mid:     '#3e546d',
        },
        charcoal: {
          900: '#191919',
          800: '#1f1f1f',
          700: '#262626',
          600: '#333333',
          500: '#3d3d3d',
        },
        tan: '#8a7a63',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
