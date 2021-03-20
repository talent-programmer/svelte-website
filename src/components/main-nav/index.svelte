<script>
  import Button from "../button.svelte";
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

<nav>
  <div class="py-5 px-3 flex justify-between lg:py-4 lg:px-7">
    <LogoWrapper />
    <div class="hidden sm:flex sm:justify-between sm:items-center">
      <NavItems>
        {#each navItems as { href, label }}
          <NavItem {href}>{label}</NavItem>
        {/each}
      </NavItems>
    </div>
    <div class="hidden sm:flex sm:justify-between sm:items-center">
      <Button>Login</Button>
    </div>
    <div class="flex items-center sm:hidden">
      <MobileMenuButton />
    </div>
  </div>
  <MobileMenu {navItems} />
</nav>
