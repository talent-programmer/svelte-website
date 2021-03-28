<script lang="ts">
  import type { Feature } from "../types/feature.type";
  import Section from "./section.svelte";

  export let feature: Feature;
  const { documentationLink, moreButton, paragraph, preview, title } = feature;
</script>

<style lang="scss">
  .feature {
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 0 0 50%;

      @media (min-width: 801px) {
        margin: var(--medium) 0;
      }
    }

    &__preview {
      flex: 0 0 45%;

      @media (max-width: 800px) {
        margin-top: var(--small);

        img {
          margin-left: auto;
          margin-right: auto;
        }
      }

      img {
        display: block;
        max-height: 500px;
        border-radius: 1.25rem;
        box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.1);
      }
    }

    &__buttons {
      @media (max-width: 850px) {
        margin-top: var(--xx-small);
      }
    }

    .btn {
      margin-bottom: var(--micro);

      &:not(:last-child) {
        margin-right: var(--micro);
      }
    }
  }
</style>

<div class="row">
  <Section>
    <div class="feature">
      <div class="feature__text text-large">
        <div>
          <h2 class="h5">{title}</h2>
          <p>{paragraph}</p>
        </div>
        <div class="feature__buttons">
          <a href={moreButton.href} class="btn btn--small btn--almost-ripe">
            {moreButton.text}
          </a>
          <a href={documentationLink} class="btn btn--small btn--salmon">
            Documentation
          </a>
        </div>
      </div>
      <div class="feature__preview">
        <img src={`/${preview.name}`} alt={preview.alt} />
      </div>
    </div>
  </Section>
</div>
