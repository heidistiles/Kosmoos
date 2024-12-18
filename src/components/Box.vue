<script setup>

</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
  div {
    border: 4px solid rgb(var(--bright-green));
    border-radius: 15px;
    padding: 0.5rem 1.25rem 1.25rem 1.25rem;
    display: flex;
    align-items: center;

    &:hover {
      background-color: rgb(var(--bright-green));
      color: rgb(var(--dark-green));
    }
  }
</style>