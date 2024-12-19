<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import Circle from "./Circle.vue";
import Card from "./Card.vue";
import Dash from "./Dash.vue";
import Box from "./Box.vue";

document.title = 'Kosmoonaut Mission Control'
</script>

<template>
  <base-template>
    <card>
      <div class="small circle">
        <router-link :to="{ name: 'Protocol' }">
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
        </router-link>
      </div>

      <section>
        <h2>Greetings, Kosmoonaut!</h2>
        <dash></dash>
        <h3>Choose program</h3>
      </section>

      <section class="buttons">
        <box :to="{ name: 'ExplorationHub' }" class="box-button">
          <h5>Explore solar system</h5>
          <svg version="1.1" class="desktop planet" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 68.47 41" style="fill:currentColor;enable-background:new 0 0 68.47 41;" xml:space="preserve">
            <path class="st0" d="M68.24,9.24c-1.72-4.88-11.41-4.21-19.24-2.79c-0.34,0.06-0.71,0.14-1.06,0.21C44.18,2.58,38.82,0,32.85,0
              C21.87,0,12.91,8.68,12.4,19.53c-0.36,0.2-0.71,0.4-1.05,0.6c-8.63,5.02-12.37,9.4-11.1,13c0.98,2.78,4.55,3.82,9.29,3.82
              c2.95,0,6.34-0.41,9.83-1.05c3.61,3.17,8.32,5.1,13.49,5.1c9.95,0,18.26-7.13,20.11-16.54C62.01,19.86,69.95,14.13,68.24,9.24z
               M32.85,4c9.1,0,16.5,7.4,16.5,16.5c0,0.47-0.03,0.92-0.07,1.38c-3.63,1.75-7.93,3.56-12.93,5.32c-5.98,2.1-11.22,3.51-15.65,4.42
              c-2.69-2.94-4.35-6.83-4.35-11.12C16.35,11.4,23.75,4,32.85,4z M4.01,31.8c-0.16-0.44,0.95-3.2,8.66-7.8
              c0.54,3.1,1.76,5.96,3.53,8.41C8.65,33.51,4.39,32.87,4.01,31.8z M32.85,37c-2.99,0-5.79-0.81-8.22-2.21
              c4.8-1.14,9.44-2.55,13.04-3.81c3.02-1.06,6.69-2.5,10.42-4.19C45.62,32.77,39.72,37,32.85,37z M53.32,19.81
              c-0.12-3.48-1.1-6.73-2.74-9.57c9.88-1.68,13.65-0.37,13.89,0.32C64.87,11.73,61.31,15.44,53.32,19.81z"/>
            </svg>
        </box>
        <box :to="{ name: 'ArtifactInventory' }" class="box-button">
          <h5>View mission artifacts</h5>
          <svg class="desktop badge" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               viewBox="0 0 41.96 61.07" style="fill:currentColor;enable-background:new 0 0 41.96 61.07;" xml:space="preserve">
            <g>
              <path class="st0" d="M41.96,20.5c0-11.3-9.2-20.5-20.5-20.5S0.96,9.2,0.96,20.5c0,4.94,1.76,9.49,4.69,13.03L0,56.38l11.07-5.3
                l7.45,9.7l2-8.35l2.32,8.65l7.18-9.9l11.17,4.98L35.6,35.3C39.51,31.57,41.96,26.32,41.96,20.5z M21.46,4c9.1,0,16.5,7.4,16.5,16.5
                S30.56,37,21.46,37c-9.1,0-16.5-7.4-16.5-16.5S12.36,4,21.46,4z M16.58,51.68l-4.31-5.61l-6.35,3.04l3.06-12.38
                c2.89,2.23,6.38,3.71,10.19,4.14L16.58,51.68z M35.15,49.08l-6.47-2.88l-4.16,5.73l-2.06-7.68l0.8-3.35
                c3.25-0.29,6.27-1.34,8.9-2.96L35.15,49.08z"/>
                <path class="st0" d="M21.46,31c5.79,0,10.5-4.71,10.5-10.5S27.25,10,21.46,10c-5.79,0-10.5,4.71-10.5,10.5S15.67,31,21.46,31z
                 M21.46,14c3.58,0,6.5,2.92,6.5,6.5s-2.92,6.5-6.5,6.5s-6.5-2.92-6.5-6.5S17.87,14,21.46,14z"/>
            </g>
          </svg>
        </box>
        <box :to="{ name: 'ResearchArchives' }" class="box-button">
          <h5>Search data archives</h5>
          <svg version="1.1" class="desktop magnify" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               viewBox="0 0 51.45 55.44" style="fill:currentColor;enable-background:new 0 0 51.45 55.44;" xml:space="preserve">
            <g>
              <path class="st0" d="M29,20.5c0,4.69-3.81,8.5-8.5,8.5v4C27.39,33,33,27.39,33,20.5H29z"/>
                          <path class="st0" d="M50.47,49.74L35.34,34.61C38.84,30.93,41,25.97,41,20.5C41,9.2,31.8,0,20.5,0C9.2,0,0,9.2,0,20.5
                S9.2,41,20.5,41c3.41,0,6.62-0.85,9.45-2.33l15.79,15.79c0.65,0.65,1.51,0.98,2.36,0.98s1.71-0.33,2.37-0.98
                c0.63-0.63,0.98-1.47,0.98-2.36C51.45,51.21,51.1,50.37,50.47,49.74z M4,20.5C4,11.4,11.4,4,20.5,4S37,11.4,37,20.5
                C37,29.6,29.6,37,20.5,37S4,29.6,4,20.5z"/>
              </g>
            </svg>
        </box>
      </section>
    </card>
  </base-template>
</template>

<style scoped>

  h2 {
    padding-bottom: 0;
  }

  a {
    text-align: center;
  }

  section {
    a {
      flex-grow: 1;
    }

    &:nth-of-type(1) {
      gap: 0;
      height: 35%;
    }
  }

  @media (min-width: 1040px) {
    .buttons {
      flex-direction: row;
      height: 67%;

      a {
        justify-content: flex-start;
        padding: 2rem;
      }
    }

    .box-button {
      flex-basis: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        padding-top: 33%;

        &.planet {
          width: 90%;
        }
        &.badge {
          width: 55%;
        }
        &.magnify {
          width: 65%;
        }
      }
    }


  }
</style>