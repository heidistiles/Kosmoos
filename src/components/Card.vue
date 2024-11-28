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
    border: 6px solid rgba(var(--bright-green), 0.66);
    padding: 2rem 3rem;


    :deep(h2) {
      font-size: 8rem;
      line-height: 7.5rem;
      margin-bottom: 1rem;
    }

    :deep(h3) {
      font-size: 2.5rem;
      line-height: 3.75rem;
    }
  }

</style>