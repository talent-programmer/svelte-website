<script>
  import docsCurrentSectionStore from "../../stores/docs-current-section";

  export let section;

  $: $docsCurrentSectionStore = section;
</script>

<style lang="scss">
  @mixin h3 {
    font-size: var(--p-large);
    line-height: 3.2rem;
  }

  .content {
    // Typography
    :global(h1),
    :global(h2),
    :global(h3) {
      margin-bottom: var(--xx-small);
      font-weight: 700;
    }

    :global(h1) {
      font-size: 4.8rem;
      line-height: 5.6rem;
    }

    :global(h2) {
      font-size: var(--h4);
      line-height: 4rem;

      &.h3 {
        @include h3;
      }
    }

    :global(h3) {
      @include h3;
    }

    :global(a) {
      font-weight: 700;

      &:hover {
        color: var(--brand-ripe);
      }
    }

    :global(h3 em) {
      font-style: normal;
    }

    // Spacing
    :global(p + h2),
    :global(h2 ~ h2) {
      margin-top: var(--medium);
    }

    :global(p + h3),
    :global(p + .h3),
    :global(h3 ~ h3),
    :global(h3 ~ .h3) {
      margin-top: 8.8rem;
    }

    :global(p + p) {
      margin-top: var(--micro);
    }

    :global(p > iframe) {
      margin-top: var(--medium);
    }

    :global(li + li) {
      margin-top: var(--macro);
    }

    // Code blocks
    :global(code) {
      min-height: 3.2rem;
      padding: 0 0.8rem;
      border-radius: 1.2rem;
      background: var(--brand-light);

      &:not([class]) {
        display: inline-flex;
        align-items: center;
      }

      &[class*="language"] {
        overflow: auto;
        display: block;
        padding: 2rem 2.4rem;
        background: var(--sand-dark);
      }
    }

    :global(pre) {
      margin: var(--micro) 0;
    }

    :global(blockquote) {
      margin: 3.2rem 0;
      padding: 2.4rem;
      border-radius: 1.2rem;
      background: var(--brand-light);

      :global(code) {
        background: var(--brand-almost-ripe);
      }
    }

    :global(table) {
      border-radius: 1.6rem;
      overflow: hidden;
    }

    :global(thead) {
      background: var(--sand-dark);
    }

    :global(tbody) {
      background: var(--offwhite);
    }
  }
</style>

<div class="content">
  <slot />
</div>
