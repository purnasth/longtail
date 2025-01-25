/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#231f20',
        light: '#f5f5f5',
        'logo-yellow': '#ffcb08',
        'logo-red': '#ed1c24',
        'logo-green': '#a6ce39',
        // 'logo-blue': '#00a2ff',
        // 'logo-purple': '#9b26af',
        // 'logo-black': '#231f20',
      },
      fontFamily: {
        // title: ['"DM Sans"', 'Cambria', 'serif'],
        title: ['"DM Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        inherit: 'inherit',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px',
        },
      },
    },
  },
  plugins: [],
};
