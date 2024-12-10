<script setup>
import {onMounted} from "vue";
import {useRoute, useRouter} from 'vue-router';
import BaseTemplate from "../templates/BaseTemplate.vue";
import planetDetails from "../data_sources/PlanetDetails.js";
import Card from "./Card.vue";

const route = useRoute();
const router = useRouter();
const parameter = route.params.planetName;
const planet = planetDetails.planets.filter(planet => planet.id === parameter)[0]

onMounted(() => {
  if (!planet) {
    router.push({
      name: 'Control'
    })
  }
})

document.title = planet.planet_name + ' Mission Data'
</script>

<template>
  <base-template v-if="planet">
    <card>
<!--      <h2>{{ planets.planet_name }}</h2>-->
<!--      <img :src="'../assets/' + planet_img + '.png'">-->

<!--      <section class="scrolling">-->
<!--        <h3>Caught on Camera</h3>-->
<!--        <p>{{ planets.caught_on_camera }}</p>-->

<!--        <h3>Measuring Up</h3>-->
<!--        <p>{{ planets.measuring_up }}</p>-->

<!--        <h3>Time Is of the Essence</h3>-->
<!--        <p>{{ planets.time_is_of_the_essence }}</p>-->

<!--        <h3>Poetry in Motion</h3>-->
<!--        <p>{{ planets.poetry_in_motion }}</p>-->

<!--        <h3>Drawn Together</h3>-->
<!--        <p>{{ planets.drawn_together }}</p>-->

<!--        <h3>Mission Accomplished</h3>-->
<!--        <p>{{ planets.mission_accomplished }}</p>-->

<!--        <h3>Fun Facts</h3>-->
<!--        <p>{{ planets.fun_facts }}</p>-->
<!--      </section>-->
    </card>
  </base-template>
</template>

<style scoped>
  section {
    height: 40%;
  }
</style>