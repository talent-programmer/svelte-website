<script>
  import Menu from "../../components/docs/menu.svelte";
  import EditInGitpodButton from "../../components/docs/edit-in-gitpod-button.svelte";
</script>

<h1>Docs</h1>

<div class="flex">
  <div>
    <Menu />
  </div>
  <div>
    <EditInGitpodButton />
    <slot />
  </div>
</div>
