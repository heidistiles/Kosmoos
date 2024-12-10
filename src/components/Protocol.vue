<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import Card from "./Card.vue";
import Dash from "./Dash.vue";

document.title = 'Kosmoonaut Mission Protocol'
</script>

<template>
  <base-template>
    <card>
      <h2>Welcome to the Kosmoonauts!</h2>
      <dash/>
      <p>As a space explorer, your mission is to learn about the planets of the solar system in order to recover artifacts. Complete each planet’s knowledge challenge to earn new discoveries!</p>
    </card>
  </base-template>
</template>

<style scoped>

</style>