<script>
  import Section from "../section.svelte";

  const buttons = [
    {
      icon: "safari.svg",
      text: "Safari Extension",
      href: "",
    },
    {
      icon: "chrome.svg",
      text: "Chrome Extension",
      href: "",
    },
    {
      icon: "windows.svg",
      text: "Windows Client",
      href: "",
    },
    {
      icon: "apple.svg",
      text: "MacOS Client",
      href: "",
    },
  ];
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }

  .screenshot {
    display: block;
    margin-bottom: -48px;
  }

  .content {
    font-size: var(--p-large);
    text-align: center;
    max-width: 900px;
    margin: auto;

    p {
      margin: var(--small) 0;
    }
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--micro);
  }

  .button {
    display: flex;
    align-items: center;
    padding: var(--macro) 1.1rem;
    justify-content: center;
    font-size: var(--p-medium);
    background: var(--white);
    border-radius: 8px;
    color: var(--black);
    font-weight: 600;

    img {
      display: inline-block;
      height: 24px;
      width: 24px;
      margin-right: 1rem;
    }
  }
</style>

<div class="row">
  <Section>
    <h2 class="h2">Remote-first. Secure by Design.</h2>
    <img class="screenshot" src="/gitpod-screenshot.png" alt="Gitpod" />
    <div class="content">
      <p>
        You no longer need an over-powered laptop to code, Gitpod works just as
        smoothly on a Chromebook or iPad. All you need is a browser. Gitpod
        centralizes all source code and never stores it on insecure machines and
        networks.
      </p>
      <div class="buttons">
        {#each buttons as { href, icon, text }}
          <a {href} target="_blank" class="button">
            <img src={`/${icon}`} alt={text} />
            {text}
          </a>
        {/each}
      </div>
    </div>
  </Section>
</div>
