/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Guardian-Regular': ['Guardian Sans Regular'],
        'Guardian-Hairline': ['Guardian Sans Hairline'],
        'Guardian-Thin': ['Guardian Sans Thin'],
        'Guardian-Light': ['Guardian Sans Light'],
        'Guardian-Medium': ['Guardian Sans Medium'],
        'Guardian-Semibold': ['Guardian Sans Semibold'],
        'Guardian-Bold': ['Guardian Sans Bold'],
        'Guardian-Black': ['Guardian Sans Black'],
        'Guardian-Ultra': ['Guardian Sans Ultra'],
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
        require('flowbite/plugin')
    ]
};
