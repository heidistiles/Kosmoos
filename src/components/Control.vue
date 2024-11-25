<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
document.title = 'Kosmoonaut Mission Control'
</script>

<template>
  <base-template>
    <section>
      <h2>Greetings, Kosmoonaut!</h2>
      <div></div>
      <h3>Choose program</h3>
      <router-link :to="{ name: 'Exploration' }">Explore solar system</router-link>
      <router-link :to="{ name: 'Exploration' }">View mission artifacts</router-link>
      <router-link :to="{ name: 'Exploration' }">Search data archives</router-link>
    </section>
  </base-template>
</template>

<style scoped>
 h1 {
   text-align: right;
   color: black;
 }
</style>