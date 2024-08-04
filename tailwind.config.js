/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '-2px': '-2px',
        '2px': '2px',
        "1px": "1px"
      }
    }
  },
  plugins: [],
}

