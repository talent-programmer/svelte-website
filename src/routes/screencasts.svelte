<script>
  import Screencast from "../components/screencasts/screencast.svelte";
  import screencasts from "../contents/screencasts";
</script>

<h1>Get started with a screencast</h1>

{#each screencasts as screencast, index}
  <Screencast {screencast} screencastNumber={index + 1} />
{/each}

<!-- Explore Gitpod card -->
<!-- Wait for https://github.com/gitpod-io/website-kumquat/pull/39 and reuse the component created there -->
