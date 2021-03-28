<script lang="ts">
  import type { ContactCard } from "../../types/contact-card.type";

  export let contactCard: ContactCard;
</script>

<div>
  <!-- TOOD: Display the image -->
  <h2>{contactCard.title}</h2>
  <p>{contactCard.description}</p>
  <a href={contactCard.btnHref}>{contactCard.btnText}</a>
</div>
