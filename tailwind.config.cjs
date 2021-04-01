const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
  purge: {
    // mode: "all",
    content: ["./src/**/*.svelte"],
    options: {
      defaultExtractor: (content) => [
        // If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
      ],
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gitpod-kumquat-gradient":
          "linear-gradient(137.41deg, #FFAD33 14.37%, #FF8A00 91.32%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        black: "var(--black)",
        "dark-grey": "var(--dark-grey)",
        "light-grey": "var(--light-grey)",
        divider: "var(--divider)",
        "sand-dark": "var(--sand-dark)",
        "sand-light": "var(--sand-light)",
        "off-white": "var(--off-white)",
        white: "var(--white)",

        gray: {
          900: "var(--black)",
          800: "var(--dark-grey)",
          700: "var(--light-grey)",
          400: "var(--divider)",
          300: "var(--sand-dark)",
          200: "var(--sand-light)",
          100: "var(--off-white)",
        },
        orange: {
          900: "var(--brand-almost-ripe)",
          800: "var(--brand-ripe)",
          700: "var(--brand-light)",
        },
        pink: {
          900: "var(--salmon)",
        },
      },
      fontSize: {
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        h4: "var(--h4)",
        h5: "var(--h5)",
        h6: "var(--h6)",
      },
      maxWidth: {
        row: "var(--row-max-width)",
      },
      spacing: {
        "xx-large": "var(--xx-large)",
        "x-large": "var(--x-large)",
        large: "var(--large)",
        medium: "var(--medium)",
        small: "var(--small)",
        "x-small": "var(--x-small)",
        "xx-small": "var(--xx-small)",
        micro: "var(--micro)",
        macro: "var(--macro)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
