<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import Card from "./Card.vue";
import Box from "./Box.vue";
import Dash from "./Dash.vue";

document.title = 'Planet Mission Report'
</script>

<template>
  <base-template>
    <card>
      <div>
        <h1>10/10</h1>
        <h2>Mission<br/>success!</h2>
        <dash/>
      </div>

      <div class="buttons">
        <router-link :to="{ name: 'ArtifactInventory' }">
          <box>Identify new artifact</box>
        </router-link>
        <router-link :to="{ name: 'ExplorationHub' }">
          <box>Explore new mission</box>
        </router-link>
      </div>
    </card>
  </base-template>
</template>

<style scoped>
* {
  text-align: center;
}

div:first-child {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

h1 {
  line-height: 90%;
  font-size: clamp(10rem, 30vw, 12.6vh);
  margin-bottom: 2rem;
}

h2 {
    text-transform: uppercase;
  }

</style>