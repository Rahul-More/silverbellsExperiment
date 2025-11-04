import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
          light: '#38bdf8'
        },
        accent: '#f59e0b'
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial']
      },
      boxShadow: {
        soft: '0 8px 24px rgba(2, 132, 199, 0.12)'
      }
    }
  },
  plugins: []
} satisfies Config
