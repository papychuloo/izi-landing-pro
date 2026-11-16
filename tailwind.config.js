/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mousse: {
          DEFAULT: '#2E4036',
          light: '#3D5447',
          dark: '#1F2C25',
          deep: '#151E19'
        },
        argile: {
          DEFAULT: '#CC5833',
          hover: '#B54926',
          light: '#E27653'
        },
        creme: {
          DEFAULT: '#F2F0E9',
          light: '#F8F7F3',
          dark: '#E5E2D8'
        },
        charbon: {
          DEFAULT: '#1A1A1A',
          card: '#222222',
          soft: '#2A2A2A'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        dramatic: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
