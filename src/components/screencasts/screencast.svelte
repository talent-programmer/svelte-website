<script lang="ts">
  import type { Screencast } from "../../types/screencasts.type";

  export let screencast: Screencast;
  export let screencastNumber: number;

  $: screencastNumberPadded = `${screencastNumber}`.padStart(3, "0");
</script>

<div>
  <div>
    <span>{screencastNumberPadded}</span>
    <span>{screencast.title}</span>
    <!-- Gitpod logo -->
  </div>
  <div>
    <!-- Preview image. TODO: What do we want to show here? -->
  </div>
</div>

<!-- TODO: Hover effect as per Figma design -->
