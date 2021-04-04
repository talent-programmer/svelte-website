<script>
  import { page } from "$app/stores";

  export let href;
</script>

<style lang="scss">
  a {
    color: var(--dark-grey);

    @media (max-width: 768px) {
      color: var(--black);
    }
  }

  .active {
    color: var(--black);
  }

  a:hover,
  a:focus {
    color: var(--black);
  }
</style>

<a
  class:active={href.indexOf($page.path) >= 0}
  {href}
  on:click
  sveltekit:prefetch><slot /></a
>
