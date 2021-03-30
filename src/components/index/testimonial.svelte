<script lang="ts">
  import type { Testimonial } from "../../types/testimonial.type";
  export let testimonial: Testimonial;

  const { name, avatar, role, org, text, tweetId, twitterHandle } = testimonial;
</script>

<style lang="scss">
  .testimonial {
    width: 400px;
    padding: var(--x-small);
    background: var(--white);
    border-radius: 16px;

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

    &:not(:last-child) {
      margin-right: var(--xx-small);
    }

    @media (max-width: 768px) {
      width: 320px;
      padding: var(--micro) var(--xx-small);

      &:not(:last-child) {
        margin-bottom: var(--xx-small);
      }
    }

    & :global(a) {
      color: #00a3ff;
      font-weight: 600;
    }
  }

  h3.text-small {
    margin-bottom: 0;
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
