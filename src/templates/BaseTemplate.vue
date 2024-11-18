<script setup>
</script>

<template>
  <header>
    <div>
      <RouterLink :to="{ name: 'Control' }"><h1>Kosmoos</h1></RouterLink>
      <nav>
        <RouterLink :to="{ name: 'Exploration' }"><div></div></RouterLink>
        <RouterLink :to="{ name: 'Inventory' }"><div></div></RouterLink>
        <RouterLink :to="{ name: 'Archives' }"><div></div></RouterLink>
        <RouterLink :to="{ name: 'Protocol' }"><div></div></RouterLink>
      </nav>

    </div>
  </header>

  <main>
    <slot></slot>
  </main>

  <footer>
    <div>Hello</div>
  </footer>
</template>

<style scoped>
</style>