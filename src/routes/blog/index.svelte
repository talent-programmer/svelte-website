<script lang="ts" context="module">
  export async function load({ session }) {
    const posts = session.posts;
    return { props: { posts } };
  }
</script>

<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";
  import OpenGraph from "../../components/open-graph.svelte";
  import PostPreview from "../../components/blog/post-preview.svelte";

  export let posts: BlogPost[];
</script>

<OpenGraph
  data={{
    description:
      "Visit the Gitpod blog to learn about releases, tutorials, news and more.",
    title: "Blog",
    type: "website",
  }}
/>
<header>
  <h1>Blog</h1>
</header>
<div class="posts">
  {#each posts.slice(0, 6) as post}
    <PostPreview {post} />
  {/each}
</div>

<header>
  <h2>Previous posts</h2>
</header>
<div class="posts">
  {#each posts.slice(6) as post}
    <PostPreview {post} />
  {/each}
</div>
