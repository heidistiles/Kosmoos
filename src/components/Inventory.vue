<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import Card from "./Card.vue";
import inventoryLog from "../data_sources/InventoryLog.js";
import Box from "./Box.vue";


document.title = 'Artifact Inventory Log'
</script>

<template>
  <base-template>
    <card>
      <h2>Artifact Log</h2>
      <section class="scrolling">
        <box v-for="(link, index) in inventoryLog" :key="index" :link="link" :to="{ path: 'artifact-inventory/schematics/' + link.id }" class="inventoryLinks">
          <svg v-html="link.svg_path"></svg>
          <h4>{{ link.planet_name }}</h4>
        </box>
      </section>
    </card>
  </base-template>
</template>

<style scoped>
h2 {
  text-align: center;
}

section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
  row-gap: 4%;
}

.inventoryLinks {
  max-width: 47%;
  flex-basis: 50%;
  text-align: center;
  max-height: 40%;

  svg {
    display: block;
    padding: 0;
    margin: 0;
    color: rgb(var(--bright-green));
  }

  &:hover {
    svg {
      color: rgb(var(--dark-green));
    }
  }
}



</style>