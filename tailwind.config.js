module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: { screens: {
      '3xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... },
      '2xl': { max: '1440px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

  

      sm: { max: '740px' },
      // => @media (max-width: 639px) { ... }
      ssm: { max: '500px' },
      // => @media (max-width: 450px) { ... }
           sssm: { max: '450px' }
      // => @media (max-width: 450px) { ... }
    },
    extend: {}
  },
  plugins: []
};
