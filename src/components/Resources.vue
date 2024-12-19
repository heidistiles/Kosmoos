<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import resourceData from "../data_sources/ResearchResources.js";
import {useRoute} from "vue-router";
import Card from "./Card.vue";
import {onMounted, ref} from "vue";
import Box from "./Box.vue";
import Dash from "./Dash.vue";

const route = useRoute();
let type = route.params.resourceType;
let resources = ref([])
let isFiltered = ref(false)

onMounted(() => {
  resources = resourceData.data.filter(resource => resource.type === type)
  isFiltered.value = true
})

if (type === "books") {
  document.title = 'Book Research Resources'
}

if (type === "videos") {
  document.title = 'Video Research Resources'
}

if (type === "websites") {
  document.title = 'Website Research Resources'
}

if (type === "locations") {
  document.title = 'Location Research Resources'
}

</script>

<template>
  <base-template>
    <card>
      <section v-if="type === 'books'">
        <h2>Books</h2>
      </section>

      <section v-if="type === 'videos'">
        <h2>Videos</h2>
      </section>

      <section v-if="type === 'websites'">
        <h2>Websites</h2>
      </section>

      <section v-if="type === 'locations'">
        <h2>Locations</h2>
      </section>

      <section class="scrolling" v-if="isFiltered">
        <box v-for="(resource, index) in resources" :key="index" :resource="resource" :href="resource.link" target="_blank">
          <h3>{{ resource.id }}</h3>
          <h5 v-if="type === 'books'" >{{ resource.subtitle }}</h5>
          <p>by {{ resource.author }} / published {{ resource.publication }} / ages <span class="nobreak">{{resource.age_range}}</span> years</p>
          <dash class="resourcesDash"></dash>
          <p>{{ resource.description }}</p>
        </box>
      </section>
    </card>
  </base-template>
</template>

<style scoped>

h5 {
  margin: 0.75rem 0 1.5rem 0;
}

a {
  height: auto;
}

p {
  hyphens: none;
}

.resourcesDash {
  margin: 0;
}

</style>