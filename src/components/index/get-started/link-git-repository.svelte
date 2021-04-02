<style lang="scss">
  .buttons {
    display: inline-flex;
    flex-direction: column;
    margin: var(--large) 0;

    .btn {
      display: flex;
      padding: var(--macro) var(--x-small);
      border-radius: 0.75rem;
      color: var(--white);
      place-items: center;

      &:not(:last-child) {
        margin-bottom: var(--micro);
      }

      &--github {
        background: #000000;
      }
      &--bitbucket {
        background: #2684ff;
      }

      &--gitlab {
        background: #fc6d26;
      }
    }

    img {
      height: 1.75rem;
      width: 1.75rem;
      margin-right: var(--micro);
    }
  }

  /* .link--light-grey {
    display: inline-block;
    margin-top: var(--micro);
    font-size: var(--h6);
  } */

  .prefix {
    display: inline-block;
    padding: 0 var(--micro);
    margin-top: var(--macro);
    background: var(--brand-light);
    border-radius: 1.2rem;
  }
</style>

<h3>Link Git repository</h3>
<p class="text-large">
  1-click-link to you chosen provider to jump into your own projects
</p>
<div class="buttons">
  <a href="https://gitpod.io/login" class="btn btn--github">
    <img src="/svg/brands/octocat-white.svg" alt="GitHub Octocat" />
    Link with GitHub
  </a>
  <a href="https://gitpod.io/login" class="btn btn--bitbucket">
    <img src="/svg/brands/bitbucket-white.svg" alt="Bitbucket" />
    Link with Bitbucket
  </a>
  <a href="https://gitpod.io/login" class="btn btn--gitlab">
    <img src="/svg/brands/gitlab-white.svg" alt="GitLab" />
    Link with GitLab
  </a>
  <!-- <a href="#" class="link--light-grey">Third-party providers ↗</a> -->
</div>
<p class="text-large">
  Or prefix any GitLab, GitHub or Bitbucket URL with
  <br />
  <span class="prefix"> gitpod.io/# </span>
</p>
