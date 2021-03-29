<script lang="ts">
  export let embedId: string;
  export let title: string;
</script>

<style>
  iframe {
    position: "absolute";
    top: 0;
    left: 0;
    width: "100%";
    height: "100%";
  }
</style>

<iframe
  src={`https://www.youtube.com/embed/${embedId}`}
  {title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>
