const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        gradient: 'var(--aw-color-gradient)',
        bluegradient: 'var(--aw-color-bluegradient)',
        textcolor: '#e6e6e7',
        textdark: '#1C1C24'
      },
      animation: {
        linear: 'backgroundLinear 3s linear infinite',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        backgroundLinear: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      boxShadow: {
        'pink': '0px 0px 32px 8px rgba(234, 51, 130, 0.2)',
        'blue': '0px 0px 32px 8px rgba(72, 85, 226, 0.2)',
      },
      dropShadow: {
        'white': '0px 0px 28px 8px rgba(0, 0, 0, 0)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  variants: ["active"],
};
