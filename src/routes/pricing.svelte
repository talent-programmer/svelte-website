<script context="module">
  export const prerender = true;
</script>

<script>
  import Explore from "../components/explore.svelte";
  import Faqs from "../components/pricing/faqs.svelte";
  import OtherPlans from "../components/pricing/other-plans.svelte";
  import PlansAndPricing from "../components/pricing/plans-and-pricing.svelte";
  import { otherPlans } from "../contents/pricing";
</script>

<PlansAndPricing />
<OtherPlans {otherPlans} />
<Faqs />
<Explore />
