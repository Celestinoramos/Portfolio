/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0F1C',
        surface: '#111827',
        surface2: '#1E293B',
        line: '#1E293B',
        text: '#F8FAFC',
        dim: '#94A3B8',
        faint: '#64748B',
        blue: '#3B82F6',
        cyan: '#22D3EE',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};