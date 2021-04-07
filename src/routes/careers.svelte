<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import CareerModal from "../components/careers/modal.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import { careers, perks } from "../contents/careers";

  let selectedCareer;
</script>

<style>
  .heroImage {
    margin: 2rem auto;
  }
  section {
    width: 50rem;
    max-width: 96vw;
    margin: auto;
  }
  section h2 {
    margin-top: 3rem;
  }
  section p,
  section h2 {
    padding-left: 2rem;
  }
</style>

<OpenGraph
  data={{
    description: "Come join our fast-growing, venture-backed team.",
    title: "Careers at Gitpod",
    type: "website",
  }}
/>
<header>
  <h1>Always read to code.</h1>
  <p>Gitpod is a developers first company.</p>
  <p>
    <a href="#jobs" class="btn-conversion">View {careers.length} openings</a>
  </p>
</header>

<img
  src="/images/careers/careers-hero.png"
  alt=""
  role="presentation"
  width="1136"
  height="631"
  class="heroImage"
/>

<section>
  <article class="hilited">
    <h2 class="h4">
      We want to make software engineering collaborative and joyful again.
    </h2>
    <p>
      We are a highly motivated, fully-remote team, organized in a flat
      hierarchy, and led by technical founders. We love open-source, have
      started and lead many popular open-source projects, and contribute to many
      others. In this fashion, we present at international conferences and
      collaborate openly around the globe.
    </p>
    <h2 class="h4">Gitpod was founded for developers by developers</h2>
    <p>
      Everybody should have a frictionless experience with Gitpod, our product
      and our comany: no hurdles, no BS, no unnecessary extra steps.
    </p>
    <p>
      Developers architect our future. We are developers ourselves and built
      Gitpod to make lives of developers easier.
    </p>
  </article>

  <h2 class="h4">Perks And Recreation</h2>
  <ul class="perks">
    {#each perks as { title }}
      <li>{title}</li>
    {/each}
  </ul>

  <h2 id="jobs" class="h4">Open positions</h2>
  <p>
    If there isn't an open position for you but you'd still want to work at
    Gitpod let us know via <a href="mailto:career@gitpod.io">career@gitpod.io</a
    >
  </p>

  <div>
    <ul class="jobs">
      {#each careers as career}
        <li>
          <button
            on:click={() => {
              selectedCareer = career;
            }}>{career.title}</button
          >
        </li>
      {/each}
    </ul>
  </div>

  <CareerModal
    career={selectedCareer}
    on:close={() => (selectedCareer = null)}
  />
</section>
