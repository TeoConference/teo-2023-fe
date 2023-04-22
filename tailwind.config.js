/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pretendard1: ['Pretendard-Thin'],
        Pretendard2: ['Pretendard-ExtraLight'],
        Pretendard3: ['Pretendard-Light'],
        Pretendard4: ['Pretendard-Regular'],
        Pretendard5: ['Pretendard-Medium'],
        Pretendard6: ['Pretendard-SemiBold'],
        Pretendard7: ['Pretendard-Bold'],
        Pretendard8: ['Pretendard-ExtraBold'],
        Pretendard8: ['Pretendard-Black'],
      },
    },
    screens: {
      desktop: '1024px',
      tablet: '768px',
    },
  },
  plugins: [],
}
