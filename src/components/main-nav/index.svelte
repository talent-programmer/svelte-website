<script>
  import MobileMenu from "./mobile-menu/index.svelte";
  import MobileMenuButton from "./mobile-menu/button.svelte";
  import NavItem from "./nav-item.svelte";
  import menuState from "./mobile-menu/state";
  import LoginButton from "./login-button.svelte";
  import Logo from "../svgs/logo.svelte";

  const navItems = [
    {
      href: "/features",
      label: "Features",
    },
    {
      href: "/pricing",
      label: "Pricing",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/docs/",
      label: "Docs",
    },
    {
      href: "/changelog",
      label: "Changelog",
    },
  ];
</script>

<style lang="scss">
  nav {
    height: var(--header-height);
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 1.25rem var(--x-small);
    color: var(--black);

    @media (max-width: 768px) {
      padding: 1.25rem var(--micro);
    }

    @media (max-width: 375px) {
      padding: 1.25rem var(--macro);
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .items {
    display: flex;
    align-items: center;

    :global(a:not(:last-child)) {
      margin-right: var(--small);
    }
  }

  @media (max-width: 768px) {
    .items {
      display: none;
    }

    .login {
      display: none;
    }
  }

  .bg-off-white {
    background: var(--sand-light);

    @media (max-width: 768px) {
      background: var(--off-white);
    }
  }
</style>

<nav class={`nav text-small ${$menuState ? "bg-off-white" : ""}`}>
  <div class="wrapper">
    <a href="/" aria-label="Gitpod" on:click={() => ($menuState = !menuState)}>
      <Logo />
    </a>
    <div class="items">
      {#each navItems as { href, label }}
        <NavItem {href}>{label}</NavItem>
      {/each}
    </div>
    <div class="login">
      <LoginButton />
    </div>
    <MobileMenuButton />
  </div>
  <MobileMenu {navItems} />
</nav>
