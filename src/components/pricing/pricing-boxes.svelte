<script lang="ts">
  import type { Pricing } from "../../types/pricing.type";
  import PricingBox from "./pricing-box.svelte";

  export let pricingPlans: Pricing[];
</script>

<style>
  div {
    display: flex;
    justify-content: space-between;
  }
</style>

<div>
  {#each pricingPlans as pricing}
    <PricingBox {pricing} />
  {/each}
</div>
