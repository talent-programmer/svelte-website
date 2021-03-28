<script>
  import LogoWrapper from "./logo-wrapper.svelte";
  import MobileMenu from "./mobile-menu/index.svelte";
  import MobileMenuButton from "./mobile-menu/button.svelte";
  import NavItem from "./nav-item.svelte";
  import NavItems from "./nav-items.svelte";

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
      href: "/docs",
      label: "Docs",
    },
    {
      href: "/changelog",
      label: "Changelog",
    },
  ];
</script>

<style>
  nav {
    height: var(--header-height);
    padding: 1.25rem var(--x-small);
    color: var(--black);

    @media (max-width: 768px) {
      padding: 1.25rem var(--micro);
    }

    @media (max-width: 375px) {
      padding: 1.25rem var(--macro);
    }
  }
</style>

<nav class="nav text-small">
  <div class="flex justify-between">
    <LogoWrapper />
    <div class="hidden sm:flex sm:justify-between sm:items-center">
      <NavItems>
        {#each navItems as { href, label }}
          <NavItem {href}>{label}</NavItem>
        {/each}
      </NavItems>
    </div>
    <div class="hidden sm:flex sm:justify-between sm:items-center">
      <a href="https://gitpod.io/login/" class="btn btn--small btn--dark"
        >Login</a
      >
    </div>
    <div class="flex items-center sm:hidden">
      <MobileMenuButton />
    </div>
  </div>
  <MobileMenu {navItems} />
</nav>
