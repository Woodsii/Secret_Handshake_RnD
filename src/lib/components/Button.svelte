<!-- Button.svelte -->
<button class="primary">
  <slot />
</button>

<style>
  .primary {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    padding: 12px 24px;
    border-radius: 8px;
  }
</style>