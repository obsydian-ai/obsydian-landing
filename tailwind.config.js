/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
        },
        'success': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
        },
        'warning': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
        'info': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'rise': 'rise 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'stack': 'stack 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'slide': 'slide 20s linear infinite',
        'rotate-slow': 'rotate 8s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'scale-slow': 'scale 4s ease-in-out infinite',
        'dash': 'dash 1.5s ease-in-out forwards',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'bounce-x': 'bounceX 2s infinite',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(20px) scale(0.95)', opacity: '0' },
          '60%': { transform: 'translateY(-5px) scale(1.02)' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        stack: {
          '0%': { transform: 'translateY(20px) scale(0.95)', opacity: '0' },
          '60%': { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.8)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        dash: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        bounceX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dots': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        'gradient-lines': 'repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 0, transparent 8px)',
      },
    },
  },
  plugins: [],
}

