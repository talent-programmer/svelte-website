<script>
  export let id;
</script>

<style>
  section {
    margin: var(--xx-large) 0;

    @media (max-width: 972px) {
      margin: var(--x-large) 0;
    }
  }
</style>

<section {id}>
  <slot />
</section>
