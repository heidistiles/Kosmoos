<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
// import bookData from "../data_sources/ResearchResourcesBooks.js";
// import videoData from "../data_sources/ResearchResourcesVideo.js";
// import webData from "../data_sources/ResearchResourcesWeb.js";
import {useRoute} from "vue-router";
import Card from "./Card.vue";

const location = useRoute();
const currentPath = location.path;

if (currentPath.includes("books")) {
  document.title = 'Book Research Resources'
}

if (currentPath.includes("videos")) {
  document.title = 'Video Research Resources'
}

if (currentPath.includes("websites")) {
  document.title = 'Website Research Resources'
}

if (currentPath.includes("locations")) {
  document.title = 'Location Research Resources'
}

</script>

<template>
  <base-template>
    <card>
      <section v-if="currentPath.includes('books')">
        <h2>Books</h2>
      </section>

      <section v-if="currentPath.includes('videos')">
        <h2>Videos</h2>
      </section>

      <section v-if="currentPath.includes('websites')">
        <h2>Websites</h2>
      </section>
    </card>
  </base-template>
</template>

<style scoped>

</style>