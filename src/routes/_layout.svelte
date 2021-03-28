<script>
  import GoogleAnalytics from "../components/google-analytics.svelte";
  import Footer from "../components/footer.svelte";
  import Nav from "../components/main-nav/index.svelte";
</script>

<GoogleAnalytics />
<Nav />
<main>
  <slot />
</main>
<Footer />
