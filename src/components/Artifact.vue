<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import {onMounted} from "vue";
import {useRoute, useRouter} from 'vue-router';
import artifactSchematics from "../data_sources/ArtifactSchematics.js";
import Card from "./Card.vue";
import Circle from "./Circle.vue";

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

document.title = artifact.artifact_name + ' Schematics'
</script>

<template>
  <base-template v-if="artifact">
    <card>
      <div class="big circle">
        <circle>
          <svg v-html="artifact.planet_symbol"></svg>
        </circle>
      </div>

      <h2>{{ artifact.artifact_name }}</h2>
      <img :src="'../assets/' + artifact.artifact_gif + '.gif'" alt=""/>

      <section class="scrolling">
        <h3>Ancient Lore</h3>
        <p>{{ artifact.ancient_lore }}</p>

        <h3>Artifact Powers</h3>
        <p>{{ artifact.artifact_powers }}</p>
      </section>
    </card>
  </base-template>
</template>

<style scoped>

  .circle {
    position: absolute;
    z-index: 99;
    svg {
      color: rgb(var(--bright-green));
      width: 95%;
      height: 95%;
      position: absolute;
      top: 2.5%;
      left: 2.5%;
    }
  }


  h2 {
    text-align: left;
    position: absolute;
    top: 7.5%;
    left: -5px;
    z-index: 1;
    color: rgb(var(--dark-green));
    background-color: rgb(var(--bright-green));
    padding: 0.25rem 1.5rem 1.5rem 1.5rem;
    border: 1px solid rgb(var(--bright-green));
    border-radius: 0 15px 15px 0;
  }

  img {
    background-color: rgba(var(--bright-green), 0.66);
    border: 4px solid rgb(var(--bright-green));
    height: 67%;
    width: 100%;
    margin-bottom: 2rem;
  }

  section {
    height: 40%;

    h3 {
      padding-top: 2rem;

      &:nth-child(1) {
        padding-top: 0;
      }
    }

    p {
      padding-top: 0.75rem;
    }
  }
</style>