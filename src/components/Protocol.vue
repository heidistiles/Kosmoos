<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import Card from "./Card.vue";
import Dash from "./Dash.vue";

document.title = 'Kosmoonaut Mission Protocol'
</script>

<template>
  <base-template>
    <card>
      <h2>Kosmoonaut Mission Brief</h2>
      <dash/>
      <h3>Space explorer, your mission is to visit each planet, beat its knowledge challenge, and find new artifacts.<br/><span>And now, ad astra!</span></h3>
    </card>
  </base-template>
</template>

<style scoped>

  h2 {
    padding-bottom: 0;
  }

  h3 {
    line-height: 115%;
  }

  span {
    line-height: 155%;
  }
</style>