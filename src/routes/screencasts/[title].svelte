<script lang="ts" context="module">
  import screencasts from "../../contents/screencasts";

  export const preload = async function (this, page) {
    const { title } = page.params;
    const screencast = screencasts.find(
      (s) => s.title.toLocaleLowerCase().replace(/\s/g, "-") === title
    );
    return { screencast };
  };
</script>

<script lang="ts">
  import type { Screencast as ScreencastType } from "../../types/screencasts.type";
  import ScreencastPreview from "../../components/screencasts/preview.svelte";
  import YouTubeEmbed from "../../components/youtube-embed.svelte";

  export let screencast: ScreencastType;
</script>

<h1>{screencast.title}</h1>
<p>{screencast.description}</p>
<YouTubeEmbed embedId={screencast.youtubeId} title={screencast.title} />
<p>
  Related documentation:
  {#each screencast.relatedDocs as relatedDoc, i}
    <a href="/docs{relatedDoc.path}">{relatedDoc.title}</a>
    {screencast.relatedDocs.length > 0 &&
    screencast.relatedDocs[i + 1] &&
    !screencast.relatedDocs[i + 2]
      ? " and "
      : screencast.relatedDocs.length > 0 && screencast.relatedDocs[i + 1]
      ? ", "
      : ""}
  {/each}
</p>

{#if screencast.nextScreencast}
  <h2>Next up...</h2>
  <ScreencastPreview
    screencast={screencasts[screencast.nextScreencast]}
    screencastNumber={screencast.nextScreencast}
  />
{/if}
