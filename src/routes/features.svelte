<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "../components/open-graph.svelte";
  import ScreencastPreview from "../components/screencasts/preview.svelte";
  import screencasts from "../contents/screencasts";

  const firstThreeScreencasts = screencasts.slice(0, 3);
</script>

<style lang="scss">
  .double img {
    height: 223px;
  }

  .triple img {
    height: 90px;
  }
  .triple h3 {
    min-height: 3rem;
  }

  .triple a {
    /* TOD0: better contrast for AA */
    color: var(--brand-ripe);
  }
  section h3:first-child,
  section h3:first-child + p {
    text-align: center;
  }
  .brief > img {
    width: 1100px;
    max-width: 90vw;
    margin: 2rem auto;
  }
</style>

<OpenGraph
  data={{
    description:
      "Learn about Gitpod's collaboration tools, workspace snapshots, supported programming languages, and much more.",
    title: "Features",
    type: "website",
  }}
/>
<header>
  <h1 class="h2">Features</h1>
  <p class="text-large">
    Gitpod will always have a free-to-use option. For those looking for a little
    more we have a few powerful solutions.
  </p>
</header>

<section class="halfimages">
  <article>
    <div>
      <!-- TODO: Insert the terminal output animation from the homepage -->
      <img
        src="/images/features/features-1.png"
        alt=""
        role="presentation"
        height="688"
        width="688"
      />
    </div>
    <div>
      <h2 class="h3">Save Time with Prebuilt Workspaces</h2>
      <p class="text-large">
        Gitpod continuously builds your git branches like a CI server. This
        means no more waiting for dependencies to be downloaded and builds to
        finish.
      </p>
      <p>
        <a href="/docs/prebuilds/" class="btn-secondary"
          >More about Prebuilt Workspaces</a
        >
      </p>
    </div>
  </article>

  <article>
    <div>
      <img
        src="/images/features/features-2.png"
        alt=""
        role="presentation"
        height="688"
        width="570"
      />
      <!-- TODO: Insert "Preparing workspace" images -->
    </div>
    <div>
      <h2 class="h3">Start Fresh with Ephemeral Dev Environments</h2>
      <p class="text-large">
        Dev environment as code assures you are always starting from a clean
        state and never gets dragged into long-living stateful environments. The
        end of all works-on-my-machine situations.
      </p>
    </div>
  </article>
</section>

<section class="cards double">
  <div class="card">
    <img
      src="/images/features/features-3.png"
      alt=""
      role="presentation"
      height="223"
      width="382"
    />
    <!-- TODO: Insert emojis -->
    <h2 class="h4">Collaboration with Workspace Sharing</h2>
    <p class="text-large">
      Collaborate with your friends, colleagues, and clients and run software or
      hunt down bugs together.
    </p>
  </div>
  <div class="card">
    <!-- TODO: Insert terminal image -->

    <img
      src="/images/features/features-4.png"
      alt=""
      role="presentation"
      height="223"
      width="483"
    />
    <h2 class="h4">Full linux machine <span>(incl sudo/docker)</span></h2>
    <p class="text-large">
      Instantly start a container in the cloud based on your Docker image.
      Install and confugire tools easily.
    </p>
  </div>
</section>

<section class="cards triple">
  <div class="card">
    <!-- TODO: Insert icon -->

    <img
      src="/images/features/features-5.png"
      alt=""
      role="presentation"
      height="90"
      width="185"
    />
    <h3 class="h5">Customize your workspace</h3>
    <p class="p-small">
      Tweak your environment to suit your needs. From themes to extensions you
      have full control over it all.
    </p>
    <a href="/docs/config-docker">More about customization</a>
  </div>
  <div class="card">
    <!-- TODO: Insert icon -->

    <img
      src="/images/features/features-6.png"
      alt=""
      role="presentation"
      height="90"
      width="322"
    />
    <h3 class="h5">GitLab, GitHub, and Bitbucket Integration</h3>
    <p class="p-small">
      Start your workflow from your Git hosting platform and let Gitpod beam you
      in a ready-to-code dev environment.
    </p>
    <!-- TODO: Figure out where to link to: -->
    <a href="TODO:">More about Integrations</a>
  </div>
  <div class="card">
    <!-- TODO: Insert icon -->

    <img
      src="/images/features/features-7.png"
      alt=""
      role="presentation"
      height="90"
      width="130"
    />
    <h3 class="h5">Code Reviews Within the IDE</h3>
    <p class="p-small">
      Open pull requests in Gitpod to run, navigate, and review the code. Reply
      to comments and publish code reviews right within Gitpod.
    </p>
    <a href="/blog/when-code-reviews-lgtm">More about Code Reviews</a>
  </div>
</section>

<section class="brief">
  <h2>VS Code and extensions in your browser</h2>
  <p class="text-large">
    Install any VS Code extension with one click via the integrated
    vendor-neutral marketplace Open VSX.
  </p>
  <!-- TODO: Insert the VS Code Gitpod theme screenshot -->

  <img
    src="/images/features/gitpod-extensions.jpg"
    alt=""
    role="presentation"
    height="1110"
    width="748"
  />
</section>

<section class="brief">
  <h2>Get started with screencasts</h2>
  <div class="screencasts">
    {#each firstThreeScreencasts as screencast, index}
      <ScreencastPreview {screencast} screencastNumber={index + 1} />
    {/each}
  </div>
  <a href="/screencasts" class="btn-conversion">See all screencasts</a>
</section>
