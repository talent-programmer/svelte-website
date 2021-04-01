<script lang="ts">
  import type { Feature } from "../types/feature.type";
  import Console from "./console.svelte";
  import Section from "./section.svelte";

  export let feature: Feature;
  const {
    documentationLink,
    moreButton,
    paragraph,
    title,
    terminalSource,
  } = feature;
</script>

<style lang="scss">
  p {
    color: var(--dark-grey);
  }
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
      <div class="feature__text">
        <div class="text-large">
          <h2 class="h3">{title}</h2>
          <p>{paragraph}</p>
        </div>
        <div class="feature__buttons">
          <a href={moreButton.href} class="btn-primary">
            {moreButton.text}
          </a>
          <a href={documentationLink} class="btn-secondary"> Documentation </a>
        </div>
      </div>
      <div class="feature__preview">
        {#if terminalSource}
          <Console source={terminalSource} />
        {/if}
      </div>
    </div>
  </Section>
</div>
