<script>
  import NavItem from "../nav-item.svelte";
  import menuState from "./state";

  export let navItems = [];
</script>

<style lang="scss">
  .nav-items {
    list-style: none;
    text-align: center;
    background: var(--white);
    padding: var(--large) 0;
  }
</style>

{#if $menuState}
  <ul class="sm:hidden nav-items">
    {#each navItems as { href, label }}
      <NavItem {href}>{label}</NavItem>
    {/each}
  </ul>
{/if}
