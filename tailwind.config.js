// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          textPrimary: '#FFFFFF',
          textSecondary: '#4A4A4A',
          highlight: '#2C2C2C',
          accent: '#BB86FC',
        },
        light: {
          background: '#FFFFFF',
          textPrimary: '#121212',
          textSecondary: '#B0B0B0',
          highlight: '#E2E2E2',
          accent: '#6200EE',
        },
      },
    }
  },
  plugins: [],
};
