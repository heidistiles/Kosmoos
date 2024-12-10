<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import Box from "./Box.vue";
import Card from "./Card.vue";

document.title = 'Research Resource Archives'
</script>

<template>
  <base-template>
    <card>
      <router-link :to="{ path: '/resources/books', params: { type: 'book' } }">
        <box>Books</box>
      </router-link>
      <router-link :to="{ name: '/resources/videos', params: { type: 'video' } }">
        <box>Videos</box>
      </router-link>
      <router-link :to="{ path: '/resources/websites', params: { type: 'website' } }">
        <box>Websites</box>
      </router-link>
      <router-link :to="{ name: '/resources/locations', params: { type: 'location' } }">
        <box>Locations</box>
      </router-link>
    </card>
  </base-template>
</template>

<style scoped>

</style>