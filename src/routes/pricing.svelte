<script>
  import Faqs from "../components/pricing/faqs.svelte";
  import OtherPlans from "../components/pricing/other-plans.svelte";
  import PlansAndPricing from "../components/pricing/plans-and-pricing.svelte";
  import { otherPlans } from "../contents/pricing";
</script>

<PlansAndPricing />
<OtherPlans {otherPlans} />
<Faqs />
