/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        violet: '#ae81e9',
        white: '#ffffff',
        black: {
          DEFAULT: '#1e1e1e',
          dark: '#0E0E0E'
        }
      }
    },
    fontFamily: {
      serif: ['Sora', defaultTheme.fontFamily.serif]
    },
    dropShadow:{
      'violet': '0 0 20px #ae81e9'
    }
  },
  plugins: []
}
