<script>
  import NavItem from "../nav-item.svelte";
  import menuState from "./state";

  export let navItems = [];
</script>

{#if $menuState}
  <div class="sm:hidden">
    {#each navItems as {href, label}}
      <NavItem {href}>{label}</NavItem>
    {/each}
  </div>
{/if}