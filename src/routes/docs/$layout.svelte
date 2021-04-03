<script>
  import Menu from "../../components/docs/menu.svelte";
  import Search from "../../components/docs/search.svelte";
  import "../../assets/docs.scss";
</script>

<div class="row flex mx-auto px-8 py-10 w-screen">
  <div class="w-2/5 pt-20">
    <Menu />
  </div>
  <div class="w-3/5">
    <Search />
    <slot />
  </div>
</div>
