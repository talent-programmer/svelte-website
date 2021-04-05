<script>
  import { pricingPlans } from "../../contents/pricing";
  import Section from "../section.svelte";
  import PricingBoxes from "./pricing-boxes.svelte";
</script>

<style>
  .row {
    text-align: center;
    margin-top: 8rem;
  }
</style>

<div class="row">
  <h1>Plans and pricing</h1>
  <PricingBoxes {pricingPlans} />
</div>
