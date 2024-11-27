<script setup>
// import {onMounted} from "vue";
// import {useRoute, useRouter} from 'vue-router';

import BaseTemplate from "../templates/BaseTemplate.vue";

import planetDetails from "../data_sources/PlanetDetails.js";

// const route = useRoute();
// const router = useRouter();
// const paramId = route.params.id;
// const testQuestion = testQuestions.data.filter(testQuestion => testQuestion.id === paramId)[0]
//
// onMounted(() => {
//   if (!testQuestion) {
//     router.push({
//       name: 'Control'
//     })
//   }
// })

document.title = 'Planet Mission Data'
</script>

<template>
  <base-template v-for="(planet, index) in planetDetails.data" :key="index">
    <h2>{{ planet.planet_name }}/10</h2>
<!--    <img :src="'../assets/' + planet_img + '.png'">-->

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

  </base-template>
</template>

<style scoped>

</style>