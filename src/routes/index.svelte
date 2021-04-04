<script context="module">
  export const prerender = true;
</script>

<script>
  import { testimonials } from "../contents/home/index";
  import { features } from "../contents/home/features";

  import Features from "../components/features.svelte";
  import ChooseProject from "../components/index/choose-project.svelte";
  import Hero from "../components/index/hero.svelte";
  import SectionScreenshot from "../components/index/section-screenshot.svelte";
  import Testimonials from "../components/index/testimonials.svelte";
  import GetStarted from "../components/index/get-started/index.svelte";
  import OpenGraph from "../components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod streamlines developer workflows by providing prebuilt, collaborative development environments in your browser - powered by VS Code.",
    title: "Gitpod - Dev environments built for the cloud",
    type: "website",
  }}
/>

<svelte:head>
  <script async defer src="https://buttons.github.io/buttons.js"></script>
</svelte:head>

<Hero />
<ChooseProject />
<Features {features} />
<SectionScreenshot />
<Testimonials {testimonials} />
<GetStarted />
