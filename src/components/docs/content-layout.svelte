<script>
  import docsCurrentSectionStore from "../../stores/docs-current-section";

  export let section;

  $: $docsCurrentSectionStore = section;
</script>

<style>
  .content :global(blockquote) {
    @apply my-14 p-8 rounded-lg bg-orange-700;
  }

  .content :global(blockquote code) {
    @apply p-2 rounded-lg bg-orange-900;
  }

  .content :global(code) {
    @apply p-2 rounded-lg bg-orange-700;
  }

  .content :global(pre) {
    @apply p-8 rounded-lg bg-gray-300 overflow-x-scroll;
  }

  .content :global(pre code) {
    @apply bg-transparent;
  }

  .content :global(h1) {
    @apply text-h1;
  }

  .content :global(h2) {
    @apply text-h2;
  }

  .content :global(h3) {
    @apply text-h3;
  }

  .content :global(h4) {
    @apply text-h4;
  }

  .content :global(h5) {
    @apply text-h5;
  }

  .content :global(h6) {
    @apply text-h6;
  }

  .content :global(p) {
    @apply my-8;
  }
</style>

<div class="content">
  <slot />
</div>
