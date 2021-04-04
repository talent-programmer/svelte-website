<script>
  import { page } from "$app/stores";

  export let href;

  $: isActivePage =
    $page.path === "/" ? /\/$/.test(href) : href.indexOf($page.path) >= 0;
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

<a class:active={isActivePage} {href} on:click sveltekit:prefetch><slot /></a>
