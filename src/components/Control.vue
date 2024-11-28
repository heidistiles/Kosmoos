<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import Circle from "./Circle.vue";
import Card from "./Card.vue";
document.title = 'Kosmoonaut Mission Control'
</script>

<template>
  <base-template>
    <card>
      <div class="small circle">
        <circle>
          <svg viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path fill="currentColor" d="M26.36,10.29c-0.66-0.4-1.39-0.59-2.18-0.59h-6.34c-0.79,0-1.53,0.2-2.21,0.59c-0.66,0.4-1.19,0.92-1.58,1.58
                      c-0.4,0.66-0.59,1.39-0.59,2.18v2.41c0,0.42,0.14,0.77,0.43,1.06c0.31,0.26,0.67,0.4,1.09,0.4h0.92c0.4,0,0.74-0.13,1.02-0.4
                      c0.31-0.29,0.46-0.64,0.46-1.06v-2.41c0-0.11,0.04-0.21,0.13-0.3c0.11-0.11,0.22-0.16,0.33-0.16h6.34c0.11,0,0.21,0.05,0.3,0.16
                      c0.09,0.09,0.13,0.19,0.13,0.3v3c0,0.26-0.11,0.43-0.33,0.49l-2.54,0.96c-0.77,0.29-1.42,0.79-1.95,1.52
                      c-0.51,0.73-0.76,1.51-0.76,2.34v2.05c0,0.42,0.14,0.77,0.43,1.06c0.31,0.29,0.67,0.43,1.09,0.43h0.89c0.42,0,0.77-0.14,1.06-0.43
                      c0.31-0.29,0.46-0.64,0.46-1.06v-1.98c0,0,0.02-0.07,0.07-0.2c0.07-0.07,0.12-0.1,0.17-0.1l2.47-0.96
                      c0.86-0.31,1.55-0.84,2.08-1.58c0.53-0.77,0.79-1.62,0.79-2.54v-3c0-0.79-0.2-1.52-0.59-2.18C27.55,11.21,27.02,10.68,26.36,10.29z
                      "/>
            <path fill="currentColor" d="M21.02,27.05c-0.68,0-1.28,0.24-1.78,0.73c-0.48,0.48-0.73,1.07-0.73,1.75s0.24,1.27,0.73,1.75
                      c0.51,0.48,1.1,0.73,1.78,0.73s1.27-0.24,1.75-0.73s0.73-1.07,0.73-1.75s-0.24-1.26-0.73-1.75S21.7,27.05,21.02,27.05z"/>
          </g>
          </svg>
        </circle>
      </div>
      <h2>Greetings, Kosmoonaut!</h2>
      <h3>Choose program dfkjhgksdjfhgksdfhg ksdfhgksdjhfgs sdkfjghskdfjgh sdfgjhsdkfgh dfhgjshdglksdhfg dfsgkjhsfdkghsfd dsfghdskjfghdskjgh ghdsjkfghsdkjfgh gskdfghkjsdfg</h3>
      <router-link :to="{ name: 'ExplorationHub' }">Explore solar system</router-link>
      <router-link :to="{ name: 'ArtifactInventory' }">View mission artifacts</router-link>
      <router-link :to="{ name: 'Protocol' }">Search data archives</router-link>
    </card>
  </base-template>
</template>

<style scoped>
</style>