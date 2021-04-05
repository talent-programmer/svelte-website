<script lang="ts">
  import type { ContactCard } from "../../types/contact-card.type";

  export let contactCard: ContactCard;
</script>

<style>
  p {
    color: var(--dark-grey);
  }
</style>

<div class="card text-center">
  <!-- TOOD: Display the image -->
  <img
    src="/images/contact/{contactCard.image}"
    height={contactCard.imgHeight}
    width={contactCard.imgWidth}
    alt=""
    role="presentation"
  />
  <h2>{contactCard.title}</h2>
  <p>{contactCard.description}</p>
  <a href={contactCard.btnHref} class="btn btn-conversion m-8"
    >{contactCard.btnText}</a
  >
</div>
