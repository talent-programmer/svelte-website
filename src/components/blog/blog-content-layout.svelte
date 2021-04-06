<script lang="ts">
  import Author from "./author.svelte";
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

  const socialLinks = [
    {
      /* TODO: create real links */
      href: "https://twitter.com/intent/tweet?link=addtext",
      alt: "Twitter",
      icon: "/svg/brands/twitter.svg",
    },
    {
      href: "https://github.com/?gitpod-io",
      alt: "GitHub",
      icon: "/svg/brands/github.svg",
    },
    {
      href: "https://community.gitpod.io/?",
      alt: "Discourse",
      icon: "/svg/brands/discourse.svg",
    },
  ];
</script>

<OpenGraph
  data={{
    description: excerpt,
    title,
    type: "article",
    image: `images/blog/${slug}/${image}`,
  }}
/>
<div class="post text-blob">
  <img
    src="/images/blog/{slug}/{teaserImage || image}"
    alt={`${title}`}
    class="headerImage"
  />
  <p class="date">{dateDisplay}</p>
  <h1>{title}</h1>
  <p>
    <span><Author {author} /></span>
  </p>
  <div>
    <slot />
  </div>
  <section class="share">
    <h4>Share this post:</h4>
    <ul>
      {#each socialLinks as link}
        <li>
          <a href={link.href}>
            <img src={link.icon} alt={link.alt} height="24" width="24" />
          </a>
        </li>
      {/each}
    </ul>
  </section>
</div>
