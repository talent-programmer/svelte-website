<script lang="ts">
  import { stores } from "@sapper/app";
  import type { OpenGraph, Type } from "../types/open-graph.type";

  export let data: OpenGraph;

  const {
    description = "Gitpod streamlines developer workflows by providing prebuilt, collaborative development environments in your browser - powered by VS Code.",
    image = "https://www.gitpod.io/images/media-image.jpg",
    title = "Gitpod - Dev environments built for the cloud",
    type = "website",
  } = data || {};

  const { page } = stores();
  const url = `https://${$page.host}${$page.path}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta
    name="keywords"
    content="dev environment, development environment, devops, cloud ide, github ide, gitlab ide, javascript, online ide, web ide, code review"
  />
  <meta name="description" content={description} />

  <!-- https://ogp.me -->
  <meta property="og:image" content={image} />
  <meta property="og:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content={type.toString()} />
  <meta property="og:url" content={url} />
</svelte:head>
