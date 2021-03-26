<script>
  export let title;
  let shown = false;
</script>

<style lang="scss">
  .faq {
    padding: var(--medium);
    border-radius: 16px;
    background: var(--sand-dark);

    @media (max-width: 768px) {
      padding: var(--xx-small);
    }

    @media (max-width: 375px) {
      padding: var(--micro);
    }

    &:not(:last-child) {
      margin-bottom: var(--xx-small);
    }

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        align-items: flex-start;
      }
    }

    &__toggle {
      flex: 0 0 2.4rem;
      display: block;
      height: 2.4rem;
      width: 2.4rem;
      outline: none;
      margin-left: var(--micro);

      @media (max-width: 768px) {
        margin-top: 3px;
      }
    }

    &__arrow {
      transition: all 0.2s;
    }

    &__text {
      margin-top: var(--micro);
    }

    & :global(a) {
      font-weight: 600;
    }
  }

  .h5 {
    margin-bottom: 0;
  }
</style>

<div class="faq">
  <div class="faq__top">
    <h3 class="h5 faq__title">{title}</h3>
    <button
      on:click={() => {
        shown = !shown;
      }}
      class="faq__toggle"
    >
      <img
        class="faq__arrow"
        src="/arrow.svg"
        alt="Arrow"
        style={`transform: ${shown ? "rotate(180deg)" : "rotate(0)"}`}
      />
    </button>
  </div>
  <div class="faq__text" style={`display: ${shown ? "block" : "none"}`}>
    <slot />
  </div>
</div>
