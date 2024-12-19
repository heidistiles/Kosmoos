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
    <card class="floated">
      <h2>{{ planet.planet_name }}</h2>
      <img class="mobile" :src="'../assets/' + planet.planet_img + '.png'" alt=""/>

      <section class="scrolling">
        <img class="desktop" :src="'../assets/' + planet.planet_img + '.png'" alt=""/>

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
  }

  h3 {
    padding-top: 2rem;

    &:nth-of-type(1) {
      padding-top: 0;
    }
  }

  p {
    padding-top: 0.75rem;
  }

  @media (min-width: 1040px) {
    section {
      display: block;
    }

    img {
      width: 50%;
      height: 67% !important;
      shape-outside: margin-box;
      float: left;
      padding: 0;
      margin: 1rem 2.5rem 0.5rem 0;
    }

  }
</style>