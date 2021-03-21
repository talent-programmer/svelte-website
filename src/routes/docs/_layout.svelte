<script>
  import Menu from "../../components/docs/menu.svelte";
  import Search from "../../components/docs/search.svelte";
  import EditInGitpodButton from "../../components/docs/edit-in-gitpod-button.svelte";
</script>

<h1>Docs</h1>

<div class="flex">
  <div>
    <Menu />
  </div>
  <div>
    <Search />
    <EditInGitpodButton />
    <slot />
  </div>
</div>
