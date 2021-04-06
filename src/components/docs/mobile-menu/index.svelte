<script>
  // Components
  import MobileMenuTopics from "./topics.svelte";
  import MobileMenuSubMenu from "./sub-menu.svelte";

  // States
  import topicsState from "../states/topics-state";

  export let MENU;
</script>

<style lang="scss">
  .mobile-menu {
    margin-bottom: 2.5rem;

    @media (min-width: 769px) {
      display: none;
    }
  }
</style>

<div class="mobile-menu">
  {#if $topicsState}
    <MobileMenuTopics {MENU} />
  {:else}
    <MobileMenuSubMenu {MENU} />
  {/if}
</div>
