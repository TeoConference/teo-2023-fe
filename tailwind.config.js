/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      colors: {
        'green-main': '#00DE4F',
        'networking-purple': '#DDD4FC',
        'networking-green': '#96F8C0',
        'networking-red': '#FFB6B6',
      },
      keyframes: {
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'move-left': 'moveLeft 30s linear infinite',
        'move-right': 'moveRight 35s linear infinite',
      },
      backgroundImage: {
        'name-card': "url('/images/NameCard.png')",
      },
    },
    fontSize: {
      h1: ['3.125rem', { lineHeight: '3.5rem', fontWeight: 700 }],
      h2: ['2.5rem', { lineHeight: '2.8rem', fontWeight: 700 }],
      h3: ['1.625rem', { lineHeight: '2.4rem', fontWeight: 700 }],
      'sub-h1': ['1.3rem', { lineHeight: '2.3rem', fontWeight: 700 }],
      'sub-h2': ['1rem', { lineHeight: '1.5rem', fontWeight: 700 }],
      body1: ['1.3rem', { lineHeight: '2.3rem', fontWeight: 400 }],
      body2: ['1rem', { lineHeight: '1.5rem', fontWeight: 400 }],
      body3: ['0.8rem', { lineHeight: '1.3rem', fontWeight: 400 }],
      'mobile-h1': ['2.125rem', { lineHeight: '2.75rem', fontWeight: 700 }],
      'mobile-h2': ['1.125rem', { lineHeight: '1.75rem', fontWeight: 700 }],
      'mobile-body2': ['0.875rem', { lineHeight: '1.375rem', fontWeight: 400 }],
      'mobile-sub-h2': [
        '0.875rem',
        { lineHeight: '1.375rem', fontWeight: 700 },
      ],
    },
    screens: {
      'desktop-xl': '1920px',
      desktop: '1200px',
      tablet: '1024px',
    },
  },
  plugins: [],
}
