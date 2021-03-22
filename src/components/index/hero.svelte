<style lang="scss">
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--x-small);

    @media (max-width: 642px) {
      flex-direction: column;
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 375px) {
      margin-top: var(--x-small);
    }

    &__text {
      max-width: 560px;
      flex: 0 0 45%;

      @media (max-width: 972px) {
        flex: 0 0 50%;
      }

      @media (max-width: 692px) {
        flex: 0 0 54%;
      }
    }

    &__intro-text {
      margin-top: var(--micro);

      @media (max-width: 972px) {
        font-size: var(--p-medium);
      }
    }

    &__action {
      margin-top: var(--small);

      @media (max-width: 972px) {
        margin-top: var(--xx-small);
      }

      & > * {
        display: grid;
        grid-template-columns: 32% 2fr;
        gap: var(--xx-small);

        @media (max-width: 1140px) {
          grid-template-columns: 29% 2fr;
        }

        @media (max-width: 972px) {
          display: flex;
          gap: var(--micro);
        }

        @media (max-width: 375px) {
          justify-content: space-between;
        }
      }
    }

    &__try-now {
      margin-bottom: var(--micro);

      @media (max-width: 972px) {
        p {
          font-size: var(--btn-small);
        }
      }
    }

    &__icons {
      display: flex;
      justify-content: space-between;
      width: 120px;

      @media (min-width: 1141px) {
        width: 160px;
      }

      img {
        height: 3rem;
        width: 3rem;
      }
    }

    &__illustration {
      max-width: 700px;
      flex: 1;

      @media (max-width: 642px) {
        margin-top: var(--micro);
      }
    }
  }
</style>

<div class="row">
  <div class="hero">
    <div class="hero__text">
      <h1 class="h1">Ready When <br /> You Are.</h1>
      <p class="hero__intro-text text-large">
        Spin up fresh, automated dev environments for each task, in the cloud,
        in seconds. Or take a day to configure them the old way, up to you.
      </p>
      <div class="hero__action">
        <div class="hero__try-now text-small">
          <div>
            <a href="#" class="btn btn--brand">Try Now</a>
          </div>
          <p>
            Give an example space a try right now.
            <br />
            Instantly link to your Git provider.
          </p>
        </div>
        <div class="hero__stars">
          <div class="hero__icons">
            <img src="/bitbucket.svg" alt="Bitbucket" />
            <img src="/github.svg" alt="GitHub" />
            <img src="/gitlab.svg" alt="GitLab" />
          </div>
          <div>GitHub Stars</div>
        </div>
      </div>
    </div>
    <div class="hero__illustration">
      <img src="/illustration.png" alt="Gitpod in a Nutshell" />
    </div>
  </div>
</div>
