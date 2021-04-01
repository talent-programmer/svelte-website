<script>
  import Menu from "../../components/docs/menu.svelte";
  import Search from "../../components/docs/search.svelte";
</script>

<style>
  .docs-layout {
    @apply py-10;

    @media (min-width: 769px) {
      @apply flex;
    }
  }

  .menu {
    @media (min-width: 769px) {
      @apply w-2/5 pt-24 pr-8;
    }
  }

  .doc-contents {
    @media (min-width: 769px) {
      @apply w-3/5;
    }
  }
</style>

<div class="docs-layout row">
  <div class="menu">
    <Menu />
  </div>
  <div class="doc-contents">
    <Search />
    <slot />
  </div>
</div>
