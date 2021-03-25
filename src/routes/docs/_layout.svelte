<script>
  import Menu from "../../components/docs/menu.svelte";
  import Search from "../../components/docs/search.svelte";
  // import EditInGitpodButton from "../../components/docs/edit-in-gitpod-button.svelte";
</script>

<div class="flex mx-auto max-w-row">
  <div class="w-2/5">
    <Menu />
  </div>
  <div class="w-3/5">
    <Search />
    <!-- <EditInGitpodButton /> -->
    <slot />
  </div>
</div>
