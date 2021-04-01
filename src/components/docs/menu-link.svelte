<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
</script>

<style>
  .active {
    color: var(--brand-ripe);
  }
</style>

<a
  class:active={href.indexOf($page.path) >= 0}
  {href}
  sveltekit:prefetch
  {...$$props}><slot /></a
>
