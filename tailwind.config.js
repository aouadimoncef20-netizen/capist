/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2E8B57',
          'green-dark': '#1B6B3F',
          black: '#111111',
          'off-black': '#1A1C1C',
        },
        surface: {
          primary: '#FFFFFF',
          secondary: '#F9F9F9',
          tertiary: '#F3F3F3',
        },
        border: {
          light: '#EAEAEA',
          medium: '#DADADA',
          dark: '#C4C7C7',
        },
        text: {
          primary: '#111111',
          secondary: '#444748',
          muted: '#747878',
        },
      },
      fontFamily: {
        display: ['Bodoni Moda', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-mobile': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        label: ['12px', { lineHeight: '1.2', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      spacing: {
        gutter: '32px',
        'gutter-mobile': '12px',
        'margin-desktop': '64px',
        'margin-tablet': '40px',
        'margin-mobile': '16px',
        'section': '96px',
        'section-mobile': '64px',
      },
      maxWidth: {
        container: '1280px',
      },
      transitionDuration: {
        fast: '200ms',
        normal: '300ms',
        slow: '500ms',
        smooth: '700ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
