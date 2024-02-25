/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        violet: '#ae81e9',
        white: '#ffffff',
        black: '#0e0e0e'
      }
    },
    fontFamily: {
      sans: ['Sora', 'sans-serif']
    }
  },
  plugins: []
}
