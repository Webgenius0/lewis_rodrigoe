/* eslint-disable */

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xxl: '1700px',
      },
      padding: {
        DEFAULT: '16px',
        sm: '1rem',
        lg: '2rem',
        xxl: '24px',
      },
    },
    extend: {
      fontFamily: {
        poppins: 'Manrope, serif',
      },
      boxShadow: {
        custom: '',
      },
      borderRadius: {},
      colors: {
        primary: {
          gradient: 'linear-gradient(180deg, #FFF -5.81%, #707070 124.71%)',
        },
      },
      backgroundImage: {
        gradientBg: 'linear-gradient(180deg, #FFF -5.81%, #707070 124.71%)',
        gradientBg2:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)',
      },
      screens: {
        xs: '390px',
        xxs: '480px',
        sm: '650px',
        md: '768px',
        xmd: '992px',
        lg: '1024px',
        xlg: '1200px',
        xl: '1560px',
        xxl: '1920px',
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))',
          },
        },
      },
      animation: {
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
