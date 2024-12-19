<script setup>

</script>

<template>
  <router-link to="">
    <slot/>
  </router-link>
</template>

<style scoped>
  a {
    border: 4px solid rgb(var(--bright-green));
    border-radius: 15px;
    padding: 0.5rem 1.25rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    :deep(p) {

        color: red;
    }
    &:hover {
      background-color: rgb(var(--bright-green));
      color: rgb(var(--dark-green));

      :deep(.resourcesDash) {
        border: blue 1px solid;
        border-bottom: 6px dashed rgb(var(--dark-green));
      }
    }
  }
</style>