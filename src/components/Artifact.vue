<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import {onMounted} from "vue";
import {useRoute, useRouter} from 'vue-router';
import artifactSchematics from "../data_sources/ArtifactSchematics.js";
import Card from "./Card.vue";

const route = useRoute();
const router = useRouter();
const parameter = route.params.artifactId;
const artifact = artifactSchematics.data.filter(artifact => artifact.id === parameter)[0]

onMounted(() => {
  if (!artifact) {
    router.push({
      name: 'Control'
    })
  }
})

document.title = 'Artifact Name Schematics'
</script>

<template>
  <base-template>
    <card></card>
  </base-template>
</template>

<style scoped>

</style>