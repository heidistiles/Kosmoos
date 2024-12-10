<script setup>
import {onMounted, watch} from "vue";
import {useRoute, useRouter} from 'vue-router';

import BaseTemplate from "../templates/BaseTemplate.vue";

import testQuestions from "../data_sources/TestQuestions.js";
import Card from "./Card.vue";

const route = useRoute();
const router = useRouter();
const parameter = route.params.questionId;
const question = testQuestions.questions.filter(question => question.id === parameter)[0]

// watch(
//     () => parameter,
//     () => {
//       window.location.reload()
//     }
// )

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
    <card id="question">
      <h2>{{ question.question_no }}/10</h2>
      <p>{{ question.question }}</p>
      <div>
        <p>{{ question.I }}</p>
        <p>{{ question.II }}</p>
        <p>{{ question.III }}</p>
        <p>{{ question.IV }}</p>
      </div>
    </card>

  </base-template>
</template>

<style scoped>
  #question {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-wrap: wrap;
      flex-basis: 50%;
      width: 100%;
      border: 1px solid red;
    }
  }


</style>