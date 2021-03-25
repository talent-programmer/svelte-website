<script>
  export let title;
  let shown = false;
</script>

<style lang="scss">
  .faq {
    padding: var(--medium);
    border-radius: 16px;
    background: var(--sand-dark);

    &:not(:last-child) {
      margin-bottom: var(--xx-small);
    }

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__toggle {
      height: 2.4rem;
      width: 2.4rem;
      outline: none;
    }

    &__arrow {
      transition: all 0.2s;
    }

    & :global(a) {
      font-weight: 600;
    }
  }

  .h5 {
    margin-bottom: var(--micro);
  }
</style>

<div class="faq">
  <div class="faq__top">
    <h3 class="h5">{title}</h3>
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
