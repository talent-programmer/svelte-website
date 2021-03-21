<script>
  import Menu from "../../components/docs/menu.svelte";
  import Search from "../../components/docs/search.svelte";
  import EditInGitpodButton from "../../components/docs/edit-in-gitpod-button.svelte";
</script>

<style lang="scss">
  .content {
    & :global(blockquote) {
      @apply my-14 p-8 rounded-lg bg-orange-700;

      & :global(code) {
        @apply p-2 rounded-lg bg-orange-900;
      }
    }

    & :global(code) {
      @apply p-2 rounded-lg bg-orange-700;
    }

    & :global(pre) {
      @apply p-8 rounded-lg bg-gray-300 overflow-x-scroll;

      & :global(code) {
        @apply bg-transparent;
      }
    }

    & :global(h1) {
      @apply text-h1;
    }

    & :global(h2) {
      @apply text-h2;
    }

    & :global(h3) {
      @apply text-h3;
    }

    & :global(h4) {
      @apply text-h4;
    }

    & :global(h5) {
      @apply text-h5;
    }

    & :global(h6) {
      @apply text-h6;
    }

    & :global(p) {
      @apply my-8;
    }
  }
</style>

<div class="flex mx-auto max-w-row">
  <div class="w-2/5">
    <Menu />
  </div>
  <div class="w-3/5">
    <Search />
    <EditInGitpodButton />
    <div class="content">
      <slot />
    </div>
  </div>
</div>
