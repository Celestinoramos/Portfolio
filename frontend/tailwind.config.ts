import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D1512',
        surface: '#121D18',
        surface2: '#182620',
        line: '#28382F',
        text: '#ECE7D8',
        dim: '#93A69B',
        faint: '#5C6E63',
        amber: '#E8A33D',
        green: '#5FBF95',
        red: '#D9704F',
        blue: '#6FA3D9',
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
export default config;
