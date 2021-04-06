<style>
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
</style>

<button class="back-button" type="button" on:click={() => console.log("click")}>
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
