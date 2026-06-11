/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#0c1324',
        background: '#0c1324',
        'surface-container-lowest': '#070d1f',
        'surface-container-low': '#151b2d',
        'surface-container': '#191f31',
        'surface-container-high': '#23293c',
        'surface-container-highest': '#2e3447',
        'surface-elevated': '#0f172a',
        'surface-bright': '#33394c',
        'surface-variant': '#2e3447',
        'on-surface': '#dce1fb',
        'on-surface-variant': '#bbc9cd',
        primary: '#8aebff',
        'primary-container': '#22d3ee',
        'on-primary-container': '#005763',
        secondary: '#43fb95',
        tertiary: '#dad9ff',
        error: '#ffb4ab',
        'outline-variant': '#3c494c',
        brand: {
          50: '#f0f4ff', 100: '#dbe4ff', 200: '#bac8ff', 300: '#91a7ff',
          400: '#748ffc', 500: '#5c7cfa', 600: '#4c6ef5', 700: '#4263eb',
          800: '#3b5bdb', 900: '#364fc7',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      spacing: {
        'grid-margin': '2rem',
        'grid-gutter': '1.5rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        drawer: '-8px 0 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
