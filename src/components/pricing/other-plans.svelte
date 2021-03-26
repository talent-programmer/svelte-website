<script>
  export let otherPlans;
</script>

<style lang="scss">
  .h2 {
    text-align: center;
  }

  .plan {
    display: flex;
    padding: var(--small) var(--xx-small) var(--small);

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &__header {
      flex: 0 0 35%;
    }

    &__body {
      flex: 1;

      & :global(strong) {
        color: var(--black);
      }
    }
  }

  p:not(:last-of-type) {
    margin-bottom: var(--xx-small);
  }

  .btn {
    margin-top: var(--small);
  }
</style>

<div class="row">
  <h2 class="h2">Open source, self hosting, and Students</h2>
  <div class="plans">
    {#each otherPlans as p}
      <div class="plan divider">
        <div class="plan__header">
          <h3 class="h5">{p.title}</h3>
        </div>
        <div class="plan__body">
          {#each p.paragraphs as para}
            <p>{@html para}</p>
          {/each}
          <a href={p.btnHref} class="btn btn--normal btn--sand-dark"
            >{p.btnText}</a
          >
        </div>
      </div>
    {/each}
  </div>
</div>
