<script lang="ts">
  import Section from "../section.svelte";
  import Brands from "./brands.svelte";
  import Testimonial from "./testimonial.svelte";
  import type { Testimonial as TestimonialType } from "../../types/testimonial.type";

  export let testimonials: TestimonialType[];
</script>

<style lang="scss">
  h1 {
    text-align: center;
  }

  .testimonials {
    display: flex;
    @media (max-width: 768px) {
      flex-flow: row wrap;
      align-items: center;
    }
  }
</style>

<div class="row">
  <Section>
    <h1>Widespread already.</h1>
    <div class="testimonials">
      {#each testimonials as testimonial}
        <Testimonial {testimonial} />
      {/each}
    </div>
    <Brands />
  </Section>
</div>
