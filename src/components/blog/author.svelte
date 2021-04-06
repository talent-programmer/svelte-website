<script lang="ts">
  import { authors } from "../../contents/blog";

  export let author: string;
  export let showIconOnly: boolean;
</script>

<span class="author">
  {#each author.split(", ") as username}
    <a href="https://github.com/{authors[username].socialProfiles.github}"
      ><img
        src="https://github.com/{authors[username].socialProfiles.github}.png"
        alt="Avatar of {authors[username].name}"
      />
      {#if !showIconOnly}
        {authors[username].name}
      {/if}
    </a>
  {/each}
</span>
