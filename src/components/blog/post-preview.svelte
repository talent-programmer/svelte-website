<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";

  export let post: BlogPost;
</script>

<div class="mb-10 max-w-xl bg-gray-100 rounded-4xl">
  <a href="/blog/{post.slug}" sveltekit:prefetch>
    <img
      src="/images/blog/{post.slug}/{post.image}"
      alt={`Preview image for the blog post titled ${post.title}`}
    />
    <div class="p-8">
      <h4 class="text-h4">{post.title}</h4>
      <p class="pt-8">{post.excerpt}</p>
      <p class="pt-8">
        <span
          >{new Date(Date.parse(post.date)).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })} by {post.author}</span
        >
      </p>
    </div>
  </a>
</div>
