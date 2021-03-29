<script>
  import { projects } from "../../../contents";
  import Project from "./project.svelte";
</script>

<style lang="scss">
  /* .link--light-grey {
    font-size: var(--h6);
  } */

  .projects {
    margin: var(--small) 0;
  }
</style>

<h3>Launch an example workspace</h3>
<p class="text-large">Dive into one of our example workspaces</p>
<div class="projects">
  {#each projects as project}
    <Project {project} />
  {/each}
</div>

<!-- <a href="#" class="link--light-grey">More example workspaces ↗</a> -->
