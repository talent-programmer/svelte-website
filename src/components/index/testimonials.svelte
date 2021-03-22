<script>
  import Section from "../section.svelte";
  import Brands from "./brands.svelte";
  import Testimonial from "./testimonial.svelte";
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }

  .testimonials {
    min-width: 1000px;
    display: flex;
  }
</style>

<div class="row">
  <Section>
    <h2 class="h2">Widespread already.</h2>
    <div class="testimonials">
      <Testimonial />
      <Testimonial />
      <Testimonial />
    </div>
    <Brands />
  </Section>
</div>
