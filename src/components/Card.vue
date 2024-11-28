<script setup>

</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
  div {
    position: relative;
    width: clamp(30rem, 90vw, 40vh);
    height: clamp(45rem, 135vw, 60vh);
    border-radius: 20px;
    background-color: rgba(var(--dark-green), 0.66);
    border: 0.75vh solid rgba(var(--bright-green), 0.66);
    padding: 2rem 3rem;
  }

</style>