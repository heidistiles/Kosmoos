<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import resourceData from "../data_sources/ResearchResources.js";
import {useRoute} from "vue-router";
import Card from "./Card.vue";
import {onMounted, ref} from "vue";
import Box from "./Box.vue";

const route = useRoute();
let level = route.params.resourceType;
let resources = ref([])
let isFiltered = ref(false)

onMounted(() => {
  resources = resourceData.data.filter(resource => resource.type === level)
  isFiltered.value = true
})

if (level === "books") {
  document.title = 'Book Research Resources'
}

if (level === "videos") {
  document.title = 'Video Research Resources'
}

if (level === "websites") {
  document.title = 'Website Research Resources'
}

if (level === "locations") {
  document.title = 'Location Research Resources'
}

</script>

<template>
  <base-template>
    <card>
      <section v-if="level === 'books'">
        <h2>Books</h2>
      </section>

      <section v-if="level === 'videos'">
        <h2>Videos</h2>
      </section>

      <section v-if="level === 'websites'">
        <h2>Websites</h2>
      </section>

      <section class="scrolling" v-if="isFiltered">
        <article v-for="(resource, index) in resources" :key="index" :resource="resource">
          <a :href="resource.link">
            <box>
              <h3>{{ resource.id }}</h3>
              <p>by {{ resource.author }} | published {{ resource.publication }}</p>
              <p>{{ resource.description }}</p>
            </box>
          </a>
        </article>
      </section>
    </card>
  </base-template>
</template>

<style scoped>

</style>