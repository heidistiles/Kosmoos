<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import testQuestions from "../data_sources/TestQuestions.js";

document.title = 'Planet Mission Challenge'
</script>

<template>
  <base-template v-for="(planet) in testQuestions.data">
    <h2>{{planet.question_no}}/10</h2>
    <p>{{planet.question}}</p>
    <div>
      <p>{{planet.I}}</p>
      <p>{{planet.II}}</p>
      <p>{{planet.III}}</p>
      <p>{{planet.IV}}</p>
    </div>

  </base-template>
</template>

<style scoped>

</style>