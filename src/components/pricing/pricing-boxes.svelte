<script lang="ts">
  import type { Pricing } from "../../types/pricing.type";
  import PricingBox from "./pricing-box.svelte";

  export let pricingPlans: Pricing[];
</script>

<style lang="scss">
  div {
    margin-top: var(--large);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<div>
  {#each pricingPlans as pricing}
    <PricingBox {pricing} />
  {/each}
</div>
