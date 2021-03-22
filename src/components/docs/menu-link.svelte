<script lang="ts">
  import { stores } from "@sapper/app";

  export let href: string;

  const { page } = stores();
</script>

<style>
  .active {
    color: var(--brand-ripe);
  }
</style>

<a class:active={$page.path === href} {href} rel="prefetch" {...$$props}
  ><slot /></a
>
