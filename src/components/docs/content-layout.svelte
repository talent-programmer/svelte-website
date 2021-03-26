<script>
  import docsCurrentSectionStore from "../../stores/docs-current-section";

  export let section;

  $: $docsCurrentSectionStore = section;
</script>

<style lang="scss" global>
  @import "../../assets/docs";
</style>

<div class="content-docs">
  <slot />
</div>
