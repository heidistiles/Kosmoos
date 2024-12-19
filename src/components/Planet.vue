<script setup>
import {onMounted} from "vue";
import {useRoute, useRouter} from 'vue-router';

import BaseTemplate from "../templates/BaseTemplate.vue";

import planetInfo from "../data_sources/PlanetDetails.js";
import Card from "./Card.vue";

const route = useRoute();
const router = useRouter();
const parameter = route.params.planetName;
const planet = planetInfo.data.filter(planet => planet.id === parameter)[0]



onMounted(() => {
  if (!planet) {
    router.push({
      name: 'Control'
    })
  }
})

document.title = planet.planet_name + ' Mission Challenge'
</script>

<template>
  <base-template v-if="planet">
    <card>
      <h2>{{ planet.planet_name }}</h2>
      <img :src="'../assets/' + planet.planet_img + '.png'" alt=""/>

      <section class="scrolling">
        <h3>Caught on Camera</h3>
        <p>{{ planet.caught_on_camera }}</p>

        <h3>Measuring Up</h3>
        <p>{{ planet.measuring_up }}</p>

        <h3>Time Is of the Essence</h3>
        <p>{{ planet.time_is_of_the_essence }}</p>

        <h3>Poetry in Motion</h3>
        <p>{{ planet.poetry_in_motion }}</p>

        <h3>Drawn Together</h3>
        <p>{{ planet.drawn_together }}</p>

        <h3>Mission Accomplished</h3>
        <p>{{ planet.mission_accomplished }}</p>

        <h3>Fun Facts</h3>
        <p>{{ planet.fun_facts }}</p>
      </section>
    </card>
  </base-template>
</template>

<style scoped>
  section {
    height: 40%;
  }

  h3 {
    padding-top: 2rem;

    &:nth-child(1) {
      padding-top: 0;
    }
  }

  p {
    padding-top: 0.75rem;
  }
</style>