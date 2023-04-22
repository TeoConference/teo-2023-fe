/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pretendard1: ['Pretendard1'],
        Pretendard2: ['Pretendard2'],
        Pretendard3: ['Pretendard3'],
        Pretendard4: ['Pretendard4'],
        Pretendard5: ['Pretendard5'],
        Pretendard6: ['Pretendard6'],
        Pretendard7: ['Pretendard7'],
        Pretendard8: ['Pretendard8'],
        Pretendard9: ['Pretendard9'],
      },
    },
    screens: {
      desktop: '1024px',
      tablet: '768px',
    },
  },
  plugins: [],
}
