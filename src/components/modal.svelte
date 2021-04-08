<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let isOpen = false;

  const dispatch = createEventDispatcher();

  const closeModal = () => {
    dispatch("close");
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div class="modal">
    <!-- TODO: Insert backdrop -->
    <div class="content text-blob">
      <button aria-label="close this popup" on:click={closeModal}>X</button>
      <slot />
    </div>
  </div>
{/if}
