<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import Box from "./Box.vue";
import Card from "./Card.vue";

document.title = 'Research Resource Archives'
</script>

<template>
  <base-template>
    <card>
      <h2>Research Log</h2>
      <section>
        <box :to="{ path: 'research-archives/resources/books' }">
          <h4>Books</h4>
        </box>
        <box :to="{ path: 'research-archives/resources/videos' }">
          <h4>Videos</h4>
        </box>
        <box :to="{ path: 'research-archives/resources/websites' }">
          <h4>Websites</h4>
        </box>
        <box :to="{ path: 'research-archives/resources/locations' }">
          <h4>Locations</h4>
        </box>
      </section>
    </card>
  </base-template>
</template>

<style scoped>

  h2 {
    text-align: center;
  }

</style>