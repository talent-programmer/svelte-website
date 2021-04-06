<script lang="ts">
  import OpenGraph from "../../components/open-graph.svelte";

  export let date;
  export let author;
  export let slug;
  // export let subtitle;
  export let title;
  export let image;
  export let teaserImage;
  export let excerpt;
  // export let slug;

  let dateDisplay = new Date(Date.parse(date)).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
</script>

<style lang="scss" global>
  @import "../../assets/blog";
</style>

<OpenGraph
  data={{
    description: excerpt,
    title,
    type: "article",
    image: `images/blog/${slug}/${image}`,
  }}
/>
<div class=" text-blob">
  <img src="/images/blog/{slug}/{teaserImage || image}" alt={`${title}`} />
  <h1>{title}</h1>
  <p>
    <span>{dateDisplay} by {author}</span>
  </p>
  <div>TODO: Share icons</div>
  <div>
    <slot />
  </div>
</div>
