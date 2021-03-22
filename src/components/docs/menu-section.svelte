<script>
  import docsCurrentSectionStore from "../../stores/docs-current-section";
  import MenuLink from "./menu-link.svelte";

  export let menuItem;

  $: isActiveSection =
    $docsCurrentSectionStore &&
    menuItem.path.endsWith(`${$docsCurrentSectionStore}/`);
</script>

<style>
  .isActiveSection {
    @apply bg-white shadow-2xl;
  }
</style>

<li class:isActiveSection class="px-8 rounded-4xl">
  <MenuLink href={menuItem.path} class="leading-loose text-h6"
    >{menuItem.title}</MenuLink
  >
  {#if menuItem.subMenu}
    <ul class="ml-6">
      {#each menuItem.subMenu as sub}
        <li>
          <MenuLink href={sub.path}>{sub.title}</MenuLink>
        </li>
      {/each}
    </ul>
  {/if}
</li>
