<script lang="ts">
  import type { Pricing } from "../../types/pricing.type";
  import PricingBox from "./pricing-box.svelte";

  export let pricingPlans: Pricing[];
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
</style>

<div class="cards">
  {#each pricingPlans as pricing}
    <PricingBox {pricing} />
  {/each}
</div>
