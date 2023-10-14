/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--body-text)', 'sans-serif'],
        title: ['var(--title-text)', 'serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
