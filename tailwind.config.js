/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mm-brown': '#5A1F06',
        'mm-red': '#BF0C34',
        'mm-blue': '#0082B9',
        'mm-lightblue': '#98D5E9',
        'mm-darkblue': '#002955',
        'mm-darkpink': '#CA5999',
        'mm-pink': '#E1A1C9',
        'mm-orange': '#FF682E',
        'mm-darkyellow': '#EF9F28',
        'mm-yellow': '#F5DA27'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}