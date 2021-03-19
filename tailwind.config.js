module.exports = {
  purge: {
    mode: 'all',
    content: ['./src/**/*.svelte'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gitpod-kumquat-gradient': 'linear-gradient(137.41deg, #FFAD33 14.37%, #FF8A00 91.32%)',
      },
      colors: {
        'black': 'var(--black)',
        'dark-grey': 'var(--dark-grey)',
        'light-grey': 'var(--light-grey)',
        'divider': 'var(--divider)',
        'sand-dark': 'var(--sand-dark)',
        'sand-light': 'var(--sand-light)',
        'offwhite': 'var(--offwhite)',
        'white': 'var(--white)',

        gray: {
          900: 'var(--black)',
          800: 'var(--dark-grey)',
          700: 'var(--light-grey)',
          400: 'var(--divider)',
          300: 'var(--sand-dark)',
          200: 'var(--sand-light)',
          100: 'var(--offwhite)',
        },
        orange: {
          900: 'var(--brand-almost-ripe)',
          800: 'var(--brand-ripe)',
          700: 'var(--brand-light)',
        },
        pink: {
          900: 'var(--salmon)',
        },
      },
      fontSize: {

      },
      spacing: {
        'xx-large': '160px',
        'x-large': '72px',
        'large': '64px',
        'medium': '56px',
        'small': '48px',
        'x-small': '32px',
        'xx-small': '24px',
        'micro': '16px',
        'macro': '8px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
