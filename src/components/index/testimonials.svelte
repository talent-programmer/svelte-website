<script lang="ts">
  import Carousel from "@beyonk/svelte-carousel";
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

  :global(.slides) {
    margin-bottom: var(--small);
  }

  :global(.slides) > :global(div) > :global(div) {
    display: flex;
    justify-content: center;
  }

  :global(.carousel.carousel.carousel) :global(li) {
    background-color: var(--divider);
    transition: all 0.2s;

    &:hover {
      background-color: var(--light-grey);
    }

    &.active {
      background-color: var(--light-grey);
    }
  }
</style>

<div class="row">
  <Section>
    <h2 class="h1">Widespread already.</h2>
    <Carousel
      controls={false}
      perPage={{
        900: 2,
        1400: 3,
      }}
    >
      {#each testimonials as testimonial}
        <Testimonial {testimonial} />
      {/each}
    </Carousel>
    <Brands />
  </Section>
</div>
