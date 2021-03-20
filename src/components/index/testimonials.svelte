<script>
  import Section from "../section.svelte";
  import Testimonial from "./testimonial.svelte";
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }

  .testimonials {
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
  </Section>
</div>
