<style lang="scss">
    .hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: var(--x-small);

        & > * {
            flex: 0 0 45%;
        }

        &__text {
            max-width: 560px;
        }

        &__intro-text {
            margin-top: var(--micro);
            font-size: var(--p-large);
        }

        &__action {
            margin-top: var(--small);

            & > * {
                display: grid;
                grid-template-columns: 29% 2fr;
                gap: var(--xx-small);
            }
        }

        &__try-now {
            margin-bottom: var(--micro);
            font-size: var(--p-small);
        }

        &__icons {
            display: flex;
            justify-content: space-between;

            img {
                height: 3rem;
                width: 3rem;
            }
        }

        &__illustration {
            max-width: 700px;
            flex: 1;
        }
    }
</style>

<div class="row">
    <div class="hero">
        <div class="hero__text">
            <h1 class="h1">Ready When <br /> You Are.</h1>
            <p class="hero__intro-text">
                Spin up fresh, automated dev environments for each task, in the
                cloud, in seconds. Or take a day to configure them the old way,
                up to you.
            </p>
            <div class="hero__action">
                <div class="hero__try-now">
                    <div>
                        <a href="#" class="btn btn--brand">Try Now</a>
                    </div>
                    <p>
                        Give an example space a try right now. Instantly link to
                        your Git provider.
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
