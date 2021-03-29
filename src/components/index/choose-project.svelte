<script>
  import Section from "../section.svelte";
</script>

<style lang="scss">
  .row {
    width: 95%;
  }

  h1 {
    text-align: center;

    @media (max-width: 1140px) {
      max-width: 800px;
      margin: 0 auto;
    }

    @media (max-width: 850px) {
      max-width: 500px;
      font-size: var(--h3);
    }
  }

  strike {
    color: var(--light-grey);
  }
</style>

<Section>
  <div class="row">
    <h1>
      Choose project,
      <br />
      <strike>
        check dependencies, checkout branch, view readme.txt, install tools, run
        build, run test,
      </strike>
      <br />
      start coding.
    </h1>
  </div>
</Section>
