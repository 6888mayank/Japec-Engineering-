/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#102A43',
          navyDark: '#0A1B2A',
          blue: '#245A91',
          blueLight: '#3B79BA',
          graphite: '#303B46',
          graphiteLight: '#485766',
          silver: '#B8C2CC',
          silverLight: '#E2E8F0',
          white: '#FFFFFF',
          lightBg: '#F3F5F7',
          accent: '#EA580C',
          accentHover: '#C2410C',
          logoBlue: '#20ACAC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'industrial': '0 4px 20px -2px rgba(16, 42, 67, 0.08), 0 2px 6px -1px rgba(16, 42, 67, 0.04)',
        'industrial-lg': '0 10px 30px -4px rgba(16, 42, 67, 0.12), 0 4px 12px -2px rgba(16, 42, 67, 0.06)',
        'industrial-inset': 'inset 0 2px 4px 0 rgba(16, 42, 67, 0.06)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, #B8C2CC 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
