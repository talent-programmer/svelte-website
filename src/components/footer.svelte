<script>
  import LogoTextless from "./svgs/logo-textless.svelte";
  const socialLinks = [
    {
      href: "https://twitter.com/gitpod",
      alt: "Twitter",
      icon: "svg/brands/twitter.svg",
    },
    {
      href: "https://github.com/gitpod-io",
      alt: "GitHub",
      icon: "svg/brands/github.svg",
    },
    {
      href: "https://community.gitpod.io/",
      alt: "Discourse",
      icon: "svg/brands/discourse.svg",
    },
  ];
</script>

<style lang="scss">
  .footer {
    padding: var(--large) var(--xx-small);

    @media (min-width: 769px) {
      max-width: 760px;
      margin: auto;
      padding: var(--small) var(--xx-small);
    }

    &__container {
      background: var(--off-white);
    }

    &__entries {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: var(--small);

      @media (max-width: 768px) {
        padding-bottom: var(--micro);
      }

      ul {
        @media (max-width: 768px) {
          flex: 0 0 22%;
          margin-bottom: var(--xx-small);
        }

        @media (max-width: 500px) {
          flex: 0 0 35%;
        }
      }

      li {
        &:first-child {
          font-weight: 600;
          color: var(--black);
        }

        &:not(:last-child) {
          margin-bottom: var(--macro);
        }
      }
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
      border-top: var(--border-light);
      padding-top: var(--x-small);

      @media (max-width: 768px) {
        padding-top: var(--xx-small);
      }

      @media (max-width: 300px) {
        flex-direction: column-reverse;
        align-items: center;
      }
    }

    &__copy {
      display: flex;
      align-items: center;

      @media (max-width: 300px) {
        margin-top: var(--micro);
      }

      span {
        margin-left: var(--macro);
      }
    }

    &__social {
      display: flex;

      &-link {
        &:not(:last-child) {
          margin-right: var(--micro);
        }
      }
    }
  }

  .logo-wrapper {
    transform: translateY(-1px);
  }

  sup {
    color: var(--brand-ripe);
  }

  a {
    color: var(--dark-grey);
    text-decoration-color: var(--brand-ripe);
  }
</style>

<div class="footer__container">
  <footer class="footer fine-print">
    <div class="footer__entries">
      <ul>
        <li>Gitpod</li>
        <li><a href="/">Home</a></li>
        <li><a href="/features/">Features</a></li>
        <li><a href="/pricing/">Pricing</a></li>
        <li><a href="/self-hosted/">Self-Hosted</a></li>
        <li>
          <a href="/gitpod-vs-github-codespaces"
            >Gitpod vs GitHub <br />Codespaces
          </a>
        </li>
      </ul>
      <ul>
        <li>Developer</li>
        <li><a href="/#get-started">Getting started</a></li>
        <li><a href="/screencasts/">Screencasts</a></li>
        <li><a href="/docs/">Documentation</a></li>
        <li>
          <a
            href="https://github.com/gitpod-io/gitpod/issues/new?template=bug_report.md"
            target="_blank">Report a bug</a
          >
        </li>
        <li>
          <a
            href="https://github.com/gitpod-io/gitpod/issues/new?template=bug_report.md"
            target="_blank">Community</a
          >
        </li>
      </ul>
      <ul>
        <li>Company</li>
        <li><a href="/about/">About</a></li>
        <li>
          <a href="/careers/">Careers<sup>*</sup></a>
        </li>
        <li><a href="/media-kit/">Media Kit</a></li>
        <li><a href="/contact/">Contact</a></li>
      </ul>
      <ul>
        <li>Legal</li>
        <li><a href="/imprint/">Imprint</a></li>
        <li>
          <a href="/terms/">Terms of Service</a>
        </li>
        <li>
          <a href="/privacy/">Privacy Policy</a>
        </li>
      </ul>
    </div>

    <div class="footer__bottom">
      <div class="footer__copy">
        <a href="/"><div class="logo-wrapper"><LogoTextless /></div></a><span
          >Copyright &copy; Gitpod</span
        >
      </div>
      <div class="footer__social">
        {#each socialLinks as link}
          <a href={link.href} class="footer__social-link">
            <img src={link.icon} alt={link.alt} />
          </a>
        {/each}
      </div>
    </div>
  </footer>
</div>
