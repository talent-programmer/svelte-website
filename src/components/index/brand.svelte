<script>
  export let brand;
  const { href, logo, alt, transform, className } = brand;
</script>

<style lang="scss">
  img {
    width: 9.5rem;
  }

  .brand {
    flex-basis: calc(14% - 2.2rem);
    display: flex;
    border: 2px solid transparent;
    justify-content: center;
    margin: 1.2rem;

    img {
      height: 100%;
    }

    .grey-logo {
      filter: grayscale(100%) contrast(0%) brightness(116%);
      -webkit-filter: grayscale(100%) contrast(0%) brightness(116%);
    }

    .fcc {
      filter: grayscale(100%) contrast(0%);
      -webkit-filter: grayscale(100%) contrast(0%);

      @media (min-width: 841px) {
        width: 13rem;
        transform: translateX(-1rem);
      }
    }

    .dwave-logo {
      transform: scale(1);
      filter: grayscale(100%) contrast(0%) brightness(112%);
      -webkit-filter: grayscale(100%) contrast(0%) brightness(112%);
    }

    .four-geeks {
      transform: scale(0.9);
    }

    .gatsby-logo {
      filter: grayscale(100%) opacity(47%);
      -webkit-filter: grayscale(100%) opacity(47%);
    }

    .vue-logo {
      filter: grayscale(100%) opacity(62%);
      -webkit-filter: grayscale(100%) opacity(62%);
    }
  }
</style>

<a {href} target="_blank" class="brand">
  <img
    src={`/${logo}`}
    {alt}
    style={`transform: ${transform}`}
    class={className}
  />
</a>
