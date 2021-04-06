<script>
  import { pricingPlans } from "../../contents/self-hosted";
  import Section from "../section.svelte";
  import PricingBoxes from "../pricing/pricing-boxes.svelte";
</script>

<style>
  .row {
    text-align: center;
  }

  h1 {
    margin-bottom: var(--xx-small);
  }

  p {
    margin-bottom: var(--small);
    color: var(--light-grey);
  }

  strong {
    color: var(--black);
  }

  .self-hosted-pricing :global(.btn-cta) {
    padding: 0.75rem 1.5rem;
  }
</style>

<div class="row">
  <Section>
    <h1>Self-hosted plans</h1>
    <p>
      Install Gitpod Self-Hosted on <strong>Google Cloud Platform</strong>,
      <strong>AWS</strong>, or on <strong>Vanilla Kubernetes</strong>.
    </p>
    <div class="self-hosted-pricing">
      <PricingBoxes {pricingPlans} />
    </div>
  </Section>
</div>
