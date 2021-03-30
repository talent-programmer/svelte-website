<script>
  import LoginButton from "../login-button.svelte";
  import NavItem from "../nav-item.svelte";
  import menuState from "./state";

  export let navItems = [];
</script>

<style lang="scss">
  .items {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    text-align: center;
    background: var(--off-white);
    padding: var(--x-large) 0;
    box-shadow: var(--shadow);

    :global(a) {
      font-size: var(--p-large);

      &:not(:last-child) {
        margin-bottom: var(--x-small);
      }
    }

    @media (min-width: 769px) {
      display: none;
    }
  }
</style>

{#if $menuState}
  <div class="items">
    {#each navItems as { href, label }}
      <NavItem {href}>{label}</NavItem>
    {/each}
    <LoginButton />
  </div>
{/if}
