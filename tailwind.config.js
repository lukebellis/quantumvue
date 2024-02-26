// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'quantum-background': '#2a282c',
        'quantum-primary': '#d16ba5',
        'quantum-secondary': '#ce5eab',
        'quantum-tertiary': '#b33ec9',
        'quantum-text': '#f0f0f0',
        'control-border': '#d1d5db',
      },
      spacing: {
        // Custom spacing
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
      },
      borderRadius: {
        // Custom border radius
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
      boxShadow: {
        // Custom shadows
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      opacity: {
        // Custom opacity levels
        '90': '0.9',
      },
      backgroundImage: {
        // Custom gradient backgrounds
        'quantum-gradient': 'linear-gradient(to right top, #d16ba5, #ce5eab, #c952b3, #c047bd, #b33ec9, #a03dc0, #8d3bb7, #7a39ad, #64378c, #50346b, #3c2e4b, #2a282c)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
