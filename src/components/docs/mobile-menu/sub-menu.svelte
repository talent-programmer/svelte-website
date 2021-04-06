<script lang="ts">
  // Components
  import MenuItem from "./menu-item.svelte";

  // States
  import topicsState from "../states/topics-state";
  import subMenuState from "../states/sub-menu-state";

  import docsCurrentSectionStore from "../../../stores/docs-current-section";

  export let MENU;

  $: currentSection = MENU.find(({ path }) =>
    $docsCurrentSectionStore
      ? path.indexOf($docsCurrentSectionStore) >= 0
      : /\/docs\/$/.test(path)
  );
</script>

<style lang="scss">
  .back-button {
    display: inline-flex;
    align-items: center;
    color: black;
    line-height: 138%;
  }

  .back-button__icon {
    flex: 0 0 auto;
    margin-right: 1rem;
    color: black;
  }

  .back-button__icon-arrow {
    transform: rotate(90deg);
  }

  .sub-menu-container {
    margin-top: 1rem;
    border-radius: 0.75rem;
    box-shadow: var(--shadow);
  }

  .toggle-button {
    display: flex;
    align-items: center;
    padding: 0.8125rem 1rem;
    line-height: 138%;
  }

  .toggle-button__label {
    flex: 1 1 auto;
    margin-right: 1rem;
    text-align: left;
  }

  .toggle-button__icon {
    flex: 0 0 auto;
  }

  .toggle-button__icon-arrow.open {
    transform: rotate(180deg);
  }
</style>

<button
  class="back-button"
  type="button"
  on:click={() => {
    $topicsState = true;
    $subMenuState = false;
  }}
>
  <div class="back-button__icon">
    <img
      class="back-button__icon-arrow"
      src="/arrow.svg"
      alt="See all topics"
      width="12"
      height="7"
    />
  </div>
  All topics
</button>

{#if currentSection.subMenu}
  <div class="sub-menu-container bg-white">
    <button
      class="toggle-button w-full"
      type="button"
      on:click={() => ($subMenuState = !$subMenuState)}
    >
      <div class="toggle-button__label">{currentSection.title}</div>
      <div class="toggle-button__icon">
        <img
          class={`toggle-button__icon-arrow ${$subMenuState ? "open" : ""}`}
          src="/arrow.svg"
          alt="Toggle sub menu"
          width="12"
          height="7"
        />
      </div>
    </button>

    {#if $subMenuState}
      <ul class="sub-menu px-4">
        {#each currentSection.subMenu as sub}
          <MenuItem href={sub.path} onClick={() => ($subMenuState = false)}>
            {sub.title}
          </MenuItem>
        {/each}
      </ul>
    {/if}
  </div>
{/if}
