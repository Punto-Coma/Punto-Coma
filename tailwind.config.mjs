/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        violet: '#ae81e9',
        white: {
          DEFAULT: '#ffffff',
          100: '#d9d9d9'
        },
        black: {
          DEFAULT: '#1e1e1e',
          dark: '#0E0E0E'
        }
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '100px']
      },
      borderRadius: {
        '4xl': '30px'
      }
    },
    fontFamily: {
      serif: ['Sora', defaultTheme.fontFamily.serif]
    }
  },
  plugins: []
}
