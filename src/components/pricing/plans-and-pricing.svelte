<script>
  import { pricingPlans } from "../../contents/pricing";
  import Section from "../section.svelte";
  import PricingBoxes from "./pricing-boxes.svelte";
</script>

<style>
  .row {
    text-align: center;
  }
</style>

<div class="row">
  <Section>
    <h1 class="h2">Plans and pricing</h1>
    <PricingBoxes {pricingPlans} />
  </Section>
</div>
