/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#bf1f43',
        'secondary': 'white',
      },
   
  },
      fontSize: {
        xs: ['10px', '14px'],
        sm: ['12px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
    },

  plugins: [require('tailwindcss')],
}