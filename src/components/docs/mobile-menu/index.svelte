<script>
  import MobileMenuTopics from "./topics.svelte";
  import MobileMenuSubMenu from "./sub-menu.svelte";

  import topicsState from "./topics-state";
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
    <MobileMenuTopics />
  {:else}
    <MobileMenuSubMenu />
  {/if}
</div>
