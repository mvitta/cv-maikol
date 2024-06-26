import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-mode': '#181c25',
        'dark-mode-2': '#13171f',
        'dark-mode-text-items': '#969eaf',
        'dark-mode-fill-icons': '#8891a4',
        'dark-mode-text-p': '#c2c7d0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'md-2': '932px',
      },
    },
  },
  plugins: [],
}
export default config
