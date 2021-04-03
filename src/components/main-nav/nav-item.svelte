<script>
  export let href;
</script>

<style lang="scss">
  a {
    color: var(--dark-grey);

    @media (max-width: 768px) {
      color: var(--black);
    }
  }

  a:hover,
  a:focus {
    color: var(--black);
  }
</style>

<a {href} on:click sveltekit:prefetch><slot /></a>
