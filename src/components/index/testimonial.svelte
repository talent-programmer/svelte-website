<script lang="ts">
  import type { Testimonial } from "../../types/testimonial.type";
  export let testimonial: Testimonial;

  const { name, avatar, role, org, text, tweetId, twitterHandle } = testimonial;
</script>

<style lang="scss">
  .testimonial {
    width: 25rem;
    padding: 1.5rem;
    background: var(--white);
    border-radius: 1rem;

    &__author {
      display: flex;
      margin-top: var(--micro);
    }

    img {
      display: block;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 0.75rem;
    }

    h3 {
      margin-bottom: 0;
    }

    &:not(:last-child) {
      margin-right: var(--xx-small);
    }

    @media (max-width: 768px) {
      width: 320px;

      &:not(:last-child) {
        margin-bottom: var(--xx-small);
      }
    }

    & :global(a) {
      color: var(--blue);
      font-weight: 600;
    }
  }
</style>

<div class="testimonial text-small">
  <div>{@html text}</div>
  <div class="testimonial__author">
    <img src={`/images/avatars/${avatar}`} alt={name} />
    <div>
      <h3 class="text-small">{name}</h3>
      <p>{role} {@html org}</p>
    </div>
  </div>
</div>
