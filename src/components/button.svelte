<style lang="scss">
  button {
    /* Note: This is an example of a button that uses CSS as provided by the design agency. */

    /* Button 32 */

    /* Auto Layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;

    width: 85px;
    height: 32px;
    right: 32px;
    top: 24px;

    /* Black */
    background: #12100c;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;

    &:hover {
      background-color: tomato;
    }
  }

  button :global() {
    color: #F9F9F9;
  }
</style>

<button>
  <slot />
</button>
