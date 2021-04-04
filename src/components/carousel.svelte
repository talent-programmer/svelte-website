<style>
  div {
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: var(--divider) var(--white);
  }

  div::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  div::-webkit-scrollbar:vertical {
    width: 0.75rem;
  }

  div::-webkit-scrollbar:horizontal {
    width: 0.75rem;
  }

  div::-webkit-scrollbar-thumb {
    background-color: var(--divider);
    border-radius: 0.625rem;
    border: 2px solidvar(--white);
  }

  div::-webkit-scrollbar-track {
    border-radius: 0.625rem;
    background-color: var(--white);
  }
</style>

<div class="flex overflow-x-scroll space-x-8 md:space-x-16" dir="ltr">
  <slot />
</div>
