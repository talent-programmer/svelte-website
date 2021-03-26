<script>
  import Section from "./section.svelte";
</script>

<style lang="scss">
  .explore {
    display: flex;
    align-items: center;
    background: var(--off-white);
    border-radius: 4rem;
    box-shadow: var(--shadow);

    &__text {
      padding: 0 var(--x-large);
      flex: 0 0 45%;
    }

    &__paragraph {
      margin-bottom: var(--x-small);
    }

    &__illustration {
      flex: 1;
      border-radius: inherit;

      img {
        border-radius: inherit;
      }
    }
  }

  .h2 {
    margin-bottom: var(--micro);
  }
</style>

<div class="row">
  <Section>
    <div class="explore">
      <div class="explore__text">
        <h2 class="h2">Explore Gitpod</h2>
        <p class="explore__paragraph h4">
          Automated and ephemeral dev environments in the cloud.
        </p>
        <a href="/features" class="btn btn--normal btn--brand">See Features</a>
      </div>
      <div class="explore__illustration">
        <img src="/explore-illustration.png" alt="Gitpod in a Nutshell" />
      </div>
    </div>
  </Section>
</div>
