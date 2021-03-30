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

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &__text {
      padding: 0 var(--large);
      flex: 0 0 45%;

      @media (max-width: 768px) {
        padding: var(--micro) var(--xx-small);
      }
    }

    &__paragraph {
      margin-bottom: var(--x-small);

      @media (max-width: 768px) {
        font-size: var(--p-large);
      }
    }

    &__illustration {
      flex: 1;
      border-radius: inherit;

      .small {
        display: none;
      }

      img {
        border-radius: inherit;
      }

      @media (max-width: 1020px) {
        img {
          display: none;
        }

        .small {
          display: block;
          padding: var(--small);
        }
      }

      @media (max-width: 768px) {
        .small {
          padding: var(--macro) var(--x-small) var(--x-small);
        }
      }
    }
  }

  h1 {
    margin-bottom: var(--micro);
  }
</style>

<div class="row">
  <Section>
    <div class="explore">
      <div class="explore__text">
        <h1>Explore Gitpod</h1>
        <p class="explore__paragraph h4">
          Automated and ephemeral dev environments in the cloud.
        </p>
        <a href="/features" class="btn-conversion">See Features</a>
      </div>
      <div class="explore__illustration">
        <img src="/images/illustration.png" alt="Gitpod in a Nutshell" />
        <img
          src="/images/illustration-small.png"
          class="small"
          alt="Gitpod in a Nutshell"
        />
      </div>
    </div>
  </Section>
</div>
