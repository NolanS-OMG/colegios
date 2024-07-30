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
        'full-vh': 'calc(100vh - 68px)'
      }
    }
  },
  plugins: [],
}

