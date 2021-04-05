<script lang="ts">
  // This file is used to define entries in the side menu
  interface MenuEntry {
    title: string;
    path: string;
    subMenu?: MenuEntry[];
  }

  function M(title: string, path: string, subMenu?: MenuEntry[]): MenuEntry {
    return {
      title,
      path: "/docs/" + (path ? path + "/" : ""),
      subMenu,
    };
  }

  const MENU: MenuEntry[] = [
    M("Introduction", ""),
    M("Getting Started", "getting-started", [
      M("Example Projects", "examples"),
    ]),
    M("Workspaces", "workspaces", [
      M("Context URLs", "context-urls"),
      M("Life of a Workspace", "life-of-workspace"),
      M("Collaboration & Sharing", "sharing-and-collaboration"),
      M("Command Line Interface", "command-line-interface"),
    ]),
    M("Configure Your Project", "configuration", [
      M(".gitpod.yml", "config-gitpod-file"),
      M("Docker Configuration", "config-docker"),
      M("Start Tasks", "config-start-tasks"),
      M("VS Code Extensions", "vscode-extensions"),
      M("Exposing Ports", "config-ports"),
      M("Prebuilt Workspaces", "prebuilds"),
      M("Environment Variables", "environment-variables"),
      M("Workspace Location", "checkout-location"),
      M("Editor Configuration", "config-editor"),
    ]),
    M("Integrations", "integrations", [
      M("GitLab Integration", "gitlab-integration"),
      M("GitHub Integration", "github-integration"),
      M("Bitbucket Integration", "bitbucket-integration"),
      M("Browser Extension", "browser-extension"),
    ]),
    M("Languages & Frameworks", "languages-and-frameworks", [
      M("JavaScript", "languages/javascript"),
      M("Python", "languages/python"),
      M("HTML/CSS", "languages/html"),
      M("Java", "languages/java"),
      M("C++", "languages/cpp"),
      M("Go", "languages/go"),
      M("Bash", "languages/bash"),
      M("Ruby", "languages/ruby"),
      M("PHP", "languages/php"),
      M("Vue", "languages/vue"),
      M("Svelte", "languages/svelte"),
      M("Scala", "languages/scala"),
      M("Rust", "languages/rust"),
      M(".NET", "languages/dotnet"),
      M("Dart", "languages/dart"),
      M("Julia", "languages/julia"),
      M("LaTeX", "languages/latex"),
      M("R", "languages/r"),
      M("Kotlin", "languages/kotlin"),
      M("Pandas", "languages/python/#pandas"),
      M("Deno", "languages/deno"),
    ]),
    // M("Feature Preview", "feature-preview"),
    M("Gitpod Self-Hosted", "self-hosted/latest/self-hosted", [
      M(
        "Install on Google Cloud Platform",
        "self-hosted/latest/install/install-on-gcp-script"
      ),
      M(
        "Install on Amazon Web Services",
        "self-hosted/latest/install/install-on-aws-script"
      ),
      M(
        "Install on self-managed Kubernetes",
        "self-hosted/latest/install/install-on-kubernetes"
      ),
      M("Configure Ingress", "self-hosted/latest/install/configure-ingress"),
      M("Configure OAuth", "self-hosted/latest/install/oauth"),
      M("Configure a Database", "self-hosted/latest/install/database"),
      M(
        "Configure a Docker Registry",
        "self-hosted/latest/install/docker-registry"
      ),
      M("Configure Storage", "self-hosted/latest/install/storage"),
      M("Configure Nodes", "self-hosted/latest/install/nodes"),
      M("Configure Workspaces", "self-hosted/latest/install/workspaces"),
    ]),
    M("Subscriptions", "subscriptions", [
      M("Professional Open Source", "professional-open-source"),
      M("Create a Team", "teams"),
    ]),
    M("Changelog", "changelog"),
  ];
</script>

<style lang="scss">
  // override _forms.scss
  .menu-item {
    margin-bottom: 0;
    border-bottom: var(--border-light);
  }

  .menu-item__link {
    display: flex;
    align-items: center;
    min-height: 3.375rem;
  }

  .menu-item__link-text {
    flex: 1 1 auto;
  }

  .menu-item__link-arrow {
    @apply ml-4;
    flex: 0 0 auto;
  }

  .menu-item__arrow {
    transform: rotate(-90deg);
  }
</style>

<ul class="mobile-menu">
  {#each MENU as menuItem}
    <li class="menu-item">
      <a href={menuItem.path} class="menu-item__link">
        <div class="menu-item__link-text">{menuItem.title}</div>
        <div class="menu-item__link-arrow" aria-hidden="true">
          <img
            class="menu-item__arrow"
            src="/arrow.svg"
            alt={menuItem.title}
            width="12"
            height="7"
          />
        </div>
      </a>
    </li>
  {/each}
</ul>
