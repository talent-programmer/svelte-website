<style lang="scss">
  .testimonial {
    width: 400px;
    padding: var(--x-small);
    background: var(--white);
    border-radius: 16px;

    p + p {
      margin-top: var(--xx-small);
    }

    &__author {
      display: flex;
      margin-top: var(--micro);
    }

    img {
      display: block;
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      margin-right: 1.2rem;
    }

    &:not(:last-child) {
      margin-right: var(--xx-small);
    }
  }
</style>

<div class="testimonial text-small">
  <p>
    12 lines of configuration gives me a 1-click development setup, installs
    dependencies and starts the dev servers for 3 APIs and 1 frontend
    application. It also ensures the Svelte extension is installed for all team
    members.
  </p>
  <p>How? With @gitpod!</p>
  <div class="testimonial__author">
    <img src="mike-nikles.jpg" alt="Mike Nikles" />
    <div>
      <h3>Mike Nikles</h3>
      <p>Software Architect @Google</p>
    </div>
  </div>
</div>
