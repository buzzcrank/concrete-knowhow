import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2878d0',
          600: '#1a6ab5',
          700: '#155996',
          800: '#114578',
          900: '#0d2f57',
        },
        navy: {
          700: '#1a2f52',
          800: '#122040',
          900: '#0d1a33',
        },
      },
    },
  },
  plugins: [],
}
export default config
