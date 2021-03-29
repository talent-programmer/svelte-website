<script lang="ts">
  import type { Testimonial } from "../../types/testimonial.type";
  export let testimonial: Testimonial;

  const { name, avatar, role, org, text, tweetId, twitterHandle } = testimonial;
</script>

<style lang="scss">
  .testimonial {
    flex: 0 0 23rem;
    padding: 1.5rem;
  }
  h3 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: var(--xx-small);
  }
 
  .testimonial__author {
    display: flex;
    margin-top: var(--micro);
    gap: 0.75rem;
  }
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  @media (min-width: 769px) {
    .testimonial:not(:last-child) {
      margin-right: var(--xx-small);
    }
  }
  @media (max-width: 768px) {
    .testimonial:not(:last-child) {
      margin-bottom: var(--xx-small);
    }
  }
  
</style>

<div class="testimonial card">
  <!-- TODO: Nisar, this breaks "npm run export". I need to look into it when you open your PR to finish the testimonial work. -->
  <div class="quote">{@html text}</div> 
  <div class="testimonial__author">
    <img src={`/${avatar}`} alt={name} />
    <div>
      <h3 class="text-small">{name}</h3>
      <p>{role} {@html org}</p>
    </div>
  </div>
</div>
