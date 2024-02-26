/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        violet: '#ae81e9',
        white: '#ffffff',
        black: '#1E1E1E'
      }
    },
    fontFamily: {
      serif: ['Sora', defaultTheme.fontFamily.serif]
    }
  },
  plugins: []
}
