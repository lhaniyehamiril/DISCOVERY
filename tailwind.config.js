/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        iphone: '340px',
        mobile: '362px',
        iphoneFourteen: '393px',
        phone: '450px',
        phone2: '400px'
      }
    },
  },
  plugins: [],
}

