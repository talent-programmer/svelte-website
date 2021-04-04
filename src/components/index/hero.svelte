<style lang="scss">
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--x-small);

    @media (max-width: 647px) {
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

      @media (max-width: 698px) {
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
      align-items: end;
      @media (max-width: 972px) {
        margin-top: var(--xx-small);
      }

      & > * {
        display: grid;
        grid-template-columns: 32% 2fr;
        gap: var(--xx-small);

        @media (max-width: 972px) {
          display: flex;
          gap: initial;

          & > * {
            &:not(:last-child) {
              margin-right: var(--micro);
            }
          }
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

      @media (max-width: 360px) {
        br {
          display: none;
        }
      }
    }

    &__icons {
      display: flex;
      justify-content: space-between;
      width: 120px;
      padding: 0 var(--macro);

      @media (min-width: 1141px) {
        width: 160px;
      }

      @media (max-width: 768px) {
        width: 145px;
      }

      img {
        height: 29px;
        width: 29px;

        @media (max-width: 1140px) {
          height: 27px;
          width: 27px;
        }
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
      <h1 class="homeh1">Ready When <br /> You Are.</h1>
      <p
        id="choose-project-observer-target"
        class="hero__intro-text text-large"
      >
        Spin up fresh, automated dev environments for each task, in the cloud,
        in seconds. Or take a day to configure them the old way, up to you.
      </p>
      <div class="hero__action">
        <div class="hero__try-now text-small">
          <div>
            <a href="#get-started" class="btn-conversion">Try Now</a>
          </div>
          <p>
            Give an example space a try right now.
            <br />
            Instantly link to your Git provider.
          </p>
        </div>
        <div class="hero__stars">
          <div class="hero__icons">
            <img src="/svg/bitbucket.svg" alt="Bitbucket logo" />
            <img src="/svg/github.svg" alt="GitHub logo" />
            <img src="/svg/gitlab.svg" alt="GitLab logo" />
          </div>
          <div>
            <!-- Place this tag where you want the button to render. -->
            <a
              class="github-button"
              href="https://github.com/gitpod-io/gitpod"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star the Gitpod Repo on GitHub">Star</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="hero__illustration">
      <img
        src="/images/illustration-placeholder.png"
        alt="Gitpod in a Nutshell"
      />
    </div>
  </div>
</div>
