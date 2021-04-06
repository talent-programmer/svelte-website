<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";

  export let post: BlogPost;
</script>

<div class="blogPreview">
  <a href="/blog/{post.slug}" sveltekit:prefetch>
    <img
      src="/images/blog/{post.slug}/{post.image}"
      alt={`Blog post: ${post.title}`}
    />
  </a>
  <div class="blurb">
    <h3>
      <a href="/blog/{post.slug}" sveltekit:prefetch>
        {post.title}
      </a>
    </h3>
    <p class="excerpt">{post.excerpt}</p>
    <p>
      <span
        >{new Date(Date.parse(post.date)).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })} by <a href="">{post.author}</a></span
      >
    </p>
  </div>
</div>
