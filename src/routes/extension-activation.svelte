<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  const currentBrowser = ["Opera", "Chrome", "Firefox", "IE"].find(
    (browser) =>
      typeof window !== "undefined" &&
      window.navigator.userAgent.includes(browser)
  );

  const repositoryProviders = [
    {
      icon: "",
      label: "Go to GitLab",
      href: "https://gitlab.com",
    },
    {
      icon: "",
      label: "Go to GitHub",
      href: "https://github.com",
    },
    {
      icon: "",
      label: "Go to Bitbucket",
      href: "https://bitbucket.org",
    },
  ];

  const features = [
    {
      icon: "",
      title: "Skip the Waiting",
      description:
        "Gitpod continuously builds your git branches like a CI server. This means no more waiting for dependencies to be downloaded and builds to finish.",
    },
    {
      icon: "",
      title: "Code Together",
      description:
        "Do code reviews within Gitpod, work together in one workspace in real-time and share reproducible workspaces with your team.",
    },
    {
      icon: "",
      title: "Work Remotely",
      description:
        "You no longer need an over-powered laptop, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser.",
    },
  ];
</script>

<h1>Gitpod for {currentBrowser} is Now Active</h1>
<p>Now you can easily spin up dev environments with a single click.</p>

<img
  src="/images/extension-activation/extension-screenshot.png"
  alt="A GitHub project page with the Gitpod button highlighted"
/>

<h2>Get started</h2>
<ol>
  <li>Go to one of your projects at GitLab, GitHub or Bitbucket.</li>
  <li>
    Click on the Gitpod button and start a dev environment for your project.
  </li>
</ol>

<div>
  {#each repositoryProviders as repositoryProvider}
    <div>
      <!-- TODO: Insert GitLab logo -->
      <a href={repositoryProvider.href}>{repositoryProvider.label}</a>
    </div>
  {/each}
</div>

<div>
  {#each features as feature}
    <div>
      <!-- TODO: Insert icon -->
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
    </div>
  {/each}
</div>

<div>
  <h2>Learn More About Gitpod</h2>
  <a href="/docs">See Docs</a>
</div>
