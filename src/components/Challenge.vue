<script setup>
// import {onMounted} from "vue";
// import {useRoute, useRouter} from 'vue-router';

import BaseTemplate from "../templates/BaseTemplate.vue";

import testQuestions from "../data_sources/TestQuestions.js";

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

document.title = 'Planet Mission Challenge'
</script>

<template>
  <base-template v-for="(question, index) in testQuestions.data" :key="index">
    <h2>{{ question.question_no }}/10</h2>
    <p>{{ question.question }}</p>
    <div>
      <p>{{ question.I }}</p>
      <p>{{ question.II }}</p>
      <p>{{ question.III }}</p>
      <p>{{ question.IV }}</p>
    </div>

  </base-template>
</template>

<style scoped>

</style>