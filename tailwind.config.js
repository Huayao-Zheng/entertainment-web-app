module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xl: { min: '1280px' },
      lg: { min: '1024px' },
      md: { min: '768px' },
      sm: { max: '639px' },
    },
    colors: {
      'body-color': '#e4e9f7',
      'sidebar-color': '#fff',
      'primary-color': '#FC4747',
      'primary-color-light': '#f6f5ff',
      'toggle-color': '#ddd',
      'text-color': '#707070',
      // d - dark theme
      'd-body-color': '#18191a',
      'd-sidebar-color': '#242526',
      'd-primary-color': '#3a3b3c',
      'd-primary-color-light': '#3a3b3c',
      'd-toggle-color': '#fff',
      'd-text-color': '#ccc',
      primaryRed: '#FC4747',
      darkBlue: '#10141E',
      greyishBlue: '#5A698F',
      semiDarkBlue: '#161D2F',
      transparent: 'transparent',
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
    backgroundImage: {
      'gradient-to-b':
        'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.75) 100%);',
      'gradient-whole':
        'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
