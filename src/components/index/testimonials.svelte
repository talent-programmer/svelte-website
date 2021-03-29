<script lang="ts">
  import Section from "../section.svelte";
  import Brands from "./brands.svelte";
  import Testimonial from "./testimonial.svelte";
  import type { Testimonial as TestimonialType } from "../../types/testimonial.type";

  export let testimonials: TestimonialType[];
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }

  .testimonials {
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
</style>

<div class="row">
  <Section>
    <h2 class="h2">Widespread already.</h2>
    <div class="testimonials">
      {#each testimonials as testimonial}
        <Testimonial {testimonial} />
      {/each}
    </div>
    <Brands />
  </Section>
</div>
