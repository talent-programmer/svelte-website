<script lang="ts">
  import type { Pricing } from "../../types/pricing.type";

  export let pricing: Pricing;
  const { title, duration, features, price, btnHref, btnText } = pricing;
</script>

<style lang="scss">
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--off-white);
    padding: var(--x-small) var(--large) var(--medium);
    border-radius: 1.6rem;
    box-shadow: var(--shadow);
    transition: all 0.2s;

    &:hover {
      box-shadow: var(--shadow-brand);
    }

    .h3 {
      margin-bottom: 0.4rem;
    }

    &__duration {
      color: var(--light-grey);
      margin-bottom: var(--xx-small);
    }

    &__list {
      margin: var(--small) 0;
      text-align: left;
    }

    &__list-item {
      position: relative;

      &::before {
        content: url("/tick.svg");
        position: absolute;
        left: -3.5rem;
        display: inline-block;
        height: 2.2rem;
        width: 2.2rem;
      }

      &:not(:last-child) {
        margin-bottom: var(--micro);
      }
    }
  }

  .btn:hover,
  .btn:focus {
    background: var(--brand-almost-ripe);
  }
</style>

<div class="box">
  <div>
    <h2 class="h5">{title}</h2>
    <div class="h3 bold">{price}</div>
    <div class="box__duration">
      {#if duration}
        {duration}
      {:else}
        <span>&nbsp</span>
      {/if}
    </div>
    <ul class="box__list">
      {#each features as feature}
        <li class="box__list-item">{feature}</li>
      {/each}
    </ul>
  </div>
  <a href={btnHref} class="btn btn--normal btn--sand-dark">{btnText}</a>
</div>
