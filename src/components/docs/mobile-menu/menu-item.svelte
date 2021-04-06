<style lang="scss">
  // override _forms.scss
  .menu-item {
    margin-bottom: 0;

    &:not(:last-child) {
      border-bottom: var(--border-light);
    }
  }

  .menu-item__link {
    display: flex;
    align-items: center;
    min-height: 3.375rem;
  }

  .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item__icon {
    @apply ml-4;
    flex: 0 0 auto;
  }

  .menu-item__icon-arrow {
    transform: rotate(-90deg);
  }
</style>

<li class="menu-item">
  <a href="#" class="menu-item__link">
    <div class="menu-item__label">TITLE</div>
    <div class="menu-item__icon" aria-hidden="true">
      <img
        class="menu-item__icon-arrow"
        src="/arrow.svg"
        alt="TODO"
        width="12"
        height="7"
      />
    </div>
  </a>
</li>
