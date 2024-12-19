<script setup>

</script>

<template>
  <article>
    <slot></slot>
  </article>
</template>

<style scoped>


  article {
    position: relative;
    width: clamp(30rem, 90vw, 40vh);
    height: clamp(45rem, 135vw, 60vh);
    border-radius: 20px;
    background-color: rgba(var(--dark-green), 0.66);
    border: 0.75vh solid rgba(var(--bright-green), 0.66);
    padding: 2rem 3rem 3rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  :deep(section) {
    display: flex;
    flex-direction: column;
    gap: 5%;
    flex-grow: 1;
  }

  :deep(h2) {
    font-size: clamp(5rem, 15vw, 6vh);
    line-height: 100%;
    padding-bottom: 3rem;
  }

  :deep(h3) {
    font-size: clamp(3rem, 10vw, 4.2vh);
    line-height: 100%;
  }

  :deep(h4) {
    font-size: clamp(2.5rem, 8.8vw, 3.5vh);
    line-height: 100%;
  }

  :deep(h5) {
    font-size: clamp(2.25rem, 8vw, 3.15vh);
    line-height: 100%;
  }

  :deep(p), :deep(a) {
    font-size: clamp(2rem, 6.6vw, 2.8vh);
    line-height: 125%;
    hyphens: auto;
    //border: 1px solid red;
  }

  :deep(.buttons) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    :deep(a) {
      flex-grow: 1;
    }
  }

  @media (min-width: 1040px) {
    article {
      position: relative;
      width: clamp(60rem, 180vw, 80vh);
      height: clamp(45rem, 135vw, 60vh);
      padding: 2rem 3rem 3rem 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    :deep(h2) {
      font-size: clamp(5rem, 15vw, 6vh);
      line-height: 100%;
      padding-bottom: 3rem;
    }

    :deep(h3) {
      font-size: clamp(3rem, 8vw, 4.2vh);
      line-height: 100%;
    }

    :deep(h4) {
      font-size: clamp(2.5rem, 8.8vw, 3.5vh);
      line-height: 100%;
    }

    :deep(h5) {
      font-size: clamp(2.25rem, 8vw, 3.15vh);
      line-height: 100%;
    }

    :deep(p), :deep(a) {
      font-size: clamp(2rem, 6.6vw, 2.8vh);
      line-height: 125%;
      hyphens: auto;
      //border: 1px solid red;
    }
  }

</style>