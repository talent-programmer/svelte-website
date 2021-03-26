<script>
  export let date;
  export let author;
  export let slug;
  // export let subtitle;
  export let title;
  export let image;
  export let teaserImage;
  // export let excerpt;
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

<img
  src="/images/blog/{slug}/{teaserImage || image}"
  alt={`Preview image for the blog post titled ${title}`}
/>
<div class="p-8">
  <h3 class="text-h3">{title}</h3>
  <p class="pt-8">
    <span>{dateDisplay} by {author}</span>
  </p>
</div>
<div>TODO: Share icons</div>
<div class="pt-8 content-blog">
  <slot />
</div>
