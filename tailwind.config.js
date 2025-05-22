/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#26AD94',
        'primary-disabled': '#90D5C8',
        'secondary': '#6EA097',
        'warning': '#AD9426',
        'warning-disabled': '#D5C890',
        'warning-disabled-dark': '#6E5E18',
        'success': '#26AD50',
        'success-disabled': '#90D5A5',
        'danger': '#AD263F',
        'danger-disabled': '#D5909D',
        'danger-disabled-dark': '#6E1828',
        'info': '#AD2682',
        'info-disabled': '#D590BF',
        'light': '#ECF8F6',
        'link': '#AD5026',
        'dark': '#051713',
        'dark-bg': '#08241E',
      }
    },
  },
  plugins: [],
}