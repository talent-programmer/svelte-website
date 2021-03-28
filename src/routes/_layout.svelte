<script>
  import Footer from "../components/footer.svelte";
  import Nav from "../components/main-nav/index.svelte";
  import OpenGraph from "../components/open-graph.svelte";
</script>

<OpenGraph />
<Nav />
<main>
  <slot />
</main>
<Footer />
