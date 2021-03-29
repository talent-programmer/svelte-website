<script lang="ts">
  import Carousel from "@beyonk/svelte-carousel";
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
</style>

<div class="row">
  <Section>
    <h2 class="h2">Widespread already.</h2>
    <Carousel dots={false} controls={false}>
      {#each testimonials as testimonial}
        <Testimonial {testimonial} />
      {/each}
    </Carousel>
    <Brands />
  </Section>
</div>
