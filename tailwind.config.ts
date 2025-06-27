import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '380px',      // Базовые смартфоны
      'sm': '480px',      // Большие телефоны
      'md': '640px',      // Планшеты
      'lg': '768px',      // Маленькие планшеты
      'xl': '1024px',     // Ноутбуки
      '2xl': '1536px',    // Большие экраны
    },
    extend: {
      colors: {
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        'inter-black': ['var(--font-inter-black)', 'Inter', 'sans-serif'],
        'roboto-light': ['var(--font-roboto-extra-light)', 'Roboto', 'sans-serif'],
        'roboto-extra-light': ['var(--font-roboto-extra-light)', 'Roboto', 'sans-serif'],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite",
        "terminal": "terminal 2s ease-in-out infinite",
        "button-pulse": "buttonPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px var(--color-accent)",
          },
          "50%": {
            boxShadow: "0 0 20px var(--color-accent), 0 0 30px var(--color-accent)",
          },
        },
        terminal: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.3" },
        },
        buttonPulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};

export default config; 