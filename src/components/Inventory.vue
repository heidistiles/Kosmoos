<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import Card from "./Card.vue";
import inventoryLog from "../data_sources/InventoryLog.js";


document.title = 'Artifact Inventory Log'
</script>

<template>
  <base-template>
    <card>
      Testing Testing 123
      <router-link :to="{ path: 'artifact-inventory/schematics/gravity-speeder' }">Link to gravity speeder</router-link>
    </card>
  </base-template>
</template>

<style scoped>

</style>