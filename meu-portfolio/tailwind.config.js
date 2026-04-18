/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        'neon-pink': {
          50: '#ff00ff',
          100: '#ff1493',
          200: '#ff69b4',
          300: '#ff1493',
          400: '#ff00ff',
          500: '#ff1493',
          600: '#dc143c',
        },
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 20, 147, 0.5), 0 0 40px rgba(255, 20, 147, 0.3)',
        'neon-pink-sm': '0 0 10px rgba(255, 20, 147, 0.4)',
      },
    },
  },
  plugins: [],
}
