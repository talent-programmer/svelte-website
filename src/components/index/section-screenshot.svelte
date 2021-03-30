<script>
  import Section from "../section.svelte";

  const buttons = [
    {
      icon: "svg/browsers/chrome.svg",
      text: "Chrome Extension",
      href:
        "https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki",
    },
    {
      icon: "svg/browsers/firefox.svg",
      text: "Firefox Extension",
      href: "https://addons.mozilla.org/firefox/addon/gitpod/",
    },
  ];
</script>

<style lang="scss">
  h1 {
    text-align: center;
  }

  .screenshot {
    display: block;
    margin: 0 auto;
    margin-bottom: -48px;

    @media (max-width: 768px) {
      margin-bottom: -20px;
    }
  }

  .content {
    text-align: center;
    max-width: 900px;
    margin: auto;

    p {
      margin: var(--small) 0;
      color: var(--dark-grey);
    }
  }

  .btn-wrapper {
    justify-content: center;
  }

  .button {
    display: flex;
    align-items: center;
    padding: var(--macro) 0.75rem;
    justify-content: center;
    background: var(--white);
    border-radius: 0.5em;
    color: var(--black);
    font-weight: 600;

    img {
      display: inline-block;
      height: 24px;
      width: 24px;
      margin-right: 0.625rem;
    }
  }
</style>

<div class="row">
  <Section>
    <h1>Remote-first. Secure by Design.</h1>
    <img class="screenshot" src="/images/gitpod-screenshot.png" alt="Gitpod" />
    <div class="content">
      <p class="text-large">
        You no longer need an over-powered laptop to code, Gitpod works just as
        smoothly on a Chromebook or iPad. All you need is a browser. Gitpod
        centralizes all source code and never stores it on insecure machines and
        networks.
      </p>
      <div class="btn-wrapper">
        {#each buttons as { href, icon, text }}
          <a {href} target="_blank" class="button text-medium">
            <img src={`/${icon}`} alt={text} />
            {text}
          </a>
        {/each}
      </div>
    </div>
  </Section>
</div>
