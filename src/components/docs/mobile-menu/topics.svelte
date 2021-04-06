<script lang="ts">
  // Components
  import MenuItem from "./menu-item.svelte";

  // States
  import topicsState from "../states/topics-state";

  export let MENU;
</script>

<ul>
  {#each MENU as menuItem}
    <MenuItem href={menuItem.path} onClick={() => ($topicsState = false)}>
      {menuItem.title}
    </MenuItem>
  {/each}
</ul>
