<script setup>
import {onMounted} from "vue";
import {useRoute, useRouter} from 'vue-router';

import BaseTemplate from "../templates/BaseTemplate.vue";

import testQuestions from "../data_sources/TestQuestions.js";

const route = useRoute();
const router = useRouter();
const parameter = route.params.questionId;
const question = testQuestions.questions.filter(question => question.id === parameter)[0]

onMounted(() => {
  if (!question) {
    router.push({
      name: 'Control'
    })
  }
})

document.title = 'Planet Mission Challenge'
</script>

<template>
  <base-template v-if="question">
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