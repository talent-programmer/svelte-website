<script>
  import MenuItem from "./menu-item.svelte";
</script>

<style lang="scss">
  .container {
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
</style>

<div class="container bg-white">
  <button
    class="toggle-button w-full"
    type="button"
    on:click={() => console.log("click")}
  >
    <div class="toggle-button__label">NAME</div>
    <div class="toggle-button__icon">
      <img
        class="toggle-button__icon-arrow"
        src="/arrow.svg"
        alt="See/hide list"
        width="12"
        height="7"
      />
    </div>
  </button>
  <ul class="sub-menu px-4">
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
  </ul>
</div>
