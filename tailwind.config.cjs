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
        textcolor: '#e6e6e7'
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      boxShadow: {
        'purple': '0px 0px 28px 8px rgba(115, 70, 199, 0.3)',
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
