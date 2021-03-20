<script>
  import Menu from "../../components/docs/menu.svelte";
</script>

<h1>Docs</h1>

<div class="flex">
  <div>
    <Menu />
  </div>
  <div>
    <slot />
  </div>
</div>
