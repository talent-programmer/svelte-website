<script>
  export let title;
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
      width: 100%;

      &::-webkit-details-marker {
        display: none;
      }

      @media (max-width: 768px) {
        align-items: flex-start;
      }
    }

    &__arrow {
      flex: 0 0 1.5rem;
      display: block;
      height: 1.5rem;
      width: 1.5rem;
      outline: none;
      margin-left: var(--micro);
      transition: all 0.2s;

      @media (max-width: 768px) {
        margin-top: 0.188rem;
      }
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

  details[open] .faq__arrow {
    transform: rotate(180deg);
  }
</style>

<details class="faq">
  <summary class="faq__top">
    <h3 class="h5 faq__title">{title}</h3>
    <img class="faq__arrow" src="/arrow.svg" alt="Arrow" />
  </summary>
  <div class="faq__text">
    <slot />
  </div>
</details>
