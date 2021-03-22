<script>
  export let project;
  const { logo, alt, title, githubUrl } = project;
</script>

<style lang="scss">
  .project {
    display: flex;
    justify-content: space-between;
    padding: 1rem var(--micro);
    background: var(--off-white);
    border-radius: 2rem;
    transition: all 0.2s;

    @media (max-width: 454px) {
      padding: var(--macro) var(--micro);
    }

    &__left {
      display: flex;
      align-items: center;
    }

    &__logo {
      width: 3.6rem;
      margin-right: var(--micro);
      filter: grayscale(100%) opacity(0.5);
      -webkit-filter: grayscale(100%) opacity(0.5);
      transition: all 0.2s;

      @media (max-width: 454px) {
        width: 2.5rem;
        margin-right: var(--macro);
      }
    }

    .btn {
      opacity: 0;

      @media (max-width: 427px) {
        display: none;
      }
    }

    &:not(:last-child) {
      margin-bottom: var(--micro);
    }

    &:hover,
    &:focus {
      background: var(--brand-light);

      .project__logo {
        filter: grayscale(0) opacity(1);
        -webkit-filter: grayscale(0) opacity(1);
      }

      .btn {
        opacity: 1;
      }
    }
  }

  .h6 {
    color: inherit;
  }
</style>

<a href={`https://gitpod.io#${githubUrl}`} class="project">
  <div class="project__left">
    <img src={`/${logo}`} {alt} class="project__logo" />
    <h4 class="h6">{title}</h4>
  </div>
  <span class="btn btn--small btn--dark">Launch workspace</span>
</a>
