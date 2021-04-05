<script context="module">
  export const prerender = true;
</script>

<script>
  import Explore from "../components/explore.svelte";
  import Faqs from "../components/self-hosted/faqs.svelte";
  import PlansAndPricing from "../components/self-hosted/plans-and-pricing.svelte";
</script>

<PlansAndPricing />
<Faqs />
<Explore />
