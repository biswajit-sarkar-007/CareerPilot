/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#0D0D0D',
          100: '#121212',
          200: '#1F1F1F',
        },
        blue: {
          electric: '#1E90FF',
        },
        purple: {
          neon: '#B980F2',
        },
        teal: {
          neon: '#00E6E6',
        },
        gray: {
          light: '#E6E6E6',
          medium: '#B0B0B0',
        }
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(30, 144, 255, 0.5), 0 0 20px rgba(30, 144, 255, 0.2)'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(30, 144, 255, 0.8), 0 0 30px rgba(30, 144, 255, 0.4)'
          },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(to right, #1E90FF, #B980F2)',
      },
    },
  },
  safelist: [
    'bg-blue-electric',
    'bg-purple-neon',
    'bg-teal-neon',
    'text-blue-electric',
    'text-purple-neon',
    'text-teal-neon',
  ],
  plugins: [],
};