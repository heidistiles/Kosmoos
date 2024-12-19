<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import planetCards from "../data_sources/PlanetCardInfo.js"
import Card from "../components/Card.vue"
import { ref } from "vue";
import Dash from "./Dash.vue";

const cards = planetCards.data;

const carouselSettings = {
  itemsToShow: 1.25,
  wrapAround: true,
  snapAlign: 'center-odd',


  breakpointMode: 'viewport',
  breakpoints: {
    480: {
      itemsToShow: 1.35
    },
    520: {
      itemsToShow: 1.5
    },
    560: {
      itemsToShow: 1.65
    },
    600: {
      itemsToShow: 1.8
    },
    640: {
      itemsToShow: 1.95
    },
    680: {
      itemsToShow: 2.1
    },
    720: {
      itemsToShow: 2.25
    },
    760: {
      itemsToShow: 2.4
    },
    800: {
      itemsToShow: 2.55
    },
    840: {
      itemsToShow: 2.7
    },
    880: {
      itemsToShow: 2.85
    },
    920: {
      itemsToShow: 2.9
    },
    960: {
      itemsToShow: 3.05
    },
    1000: {
      itemsToShow: 3.2
    }

  }
};

document.title = 'Planetary Exploration Hub'
</script>

<template>
  <base-template>
    <carousel id="cardCarousel" ref="cardCarousel" v-bind="carouselSettings">
      <slide v-bind="slideSettings" v-for="(slide, index) in cards" :key="index" :slide="slide" class="slide">
        <card class="carousel__item">
          <h2>{{slide.planet_name}}</h2>

          <section class="info">
            <img :src="slide.planet_img" :alt="'Photo of' + slide.planet_name"/>

            <section class="stats">
              <p>Circumference</p>
                <p>{{ slide.circumference }}K km</p>

              <p>Mass</p>
                <p>{{ slide.mass }}<span class="super">{{ slide.mass_sup }}</span> kg</p>

              <p>Temperature</p>
                <p>{{ slide.temperature }}&deg;C</p>

              <p>Period</p>
                <p>{{ slide.period }}</p>
            </section>
          </section>

          <section class="abilities">
            <h3>Special Abilities</h3>
            <dash></dash>
            <h4>{{ slide.attack }}</h4>
            <h4>{{ slide.defense }}</h4>
          </section>
        </card>

      </slide>
      <template #addons>
        <navigation></navigation>
      </template>
    </carousel>
  </base-template>
</template>

<style scoped>
  #cardCarousel {
    max-height: 65vh;
    max-width: 100vw;
  }

  .carousel__slide {
    transform: scale(0.9);

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

    .info {
      border: 4px solid rgb(var(--bright-green));
      border-radius: 15px;
      margin-bottom: 1rem;
      height: 67%;

      img {
        height: 60%;
        background-color: rgba(var(--bright-green), 0.66);
      }

      .stats {
        height: 40%;
        text-align: left;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap !important;
        gap: 0;
        margin: -1rem 2rem 2rem 2rem;

        p {
          width: 50%;
          margin-top: 0.5rem;
          line-height: 100%;
          vertical-align: center;

          &:nth-of-type(even) {
            text-align: right;
          }

          &:nth-child(3) {
            padding-top: 0.55rem;
            width: 25% !important;
          }

          &:nth-child(4) {
            width: 75% !important;
          }
        }
      }
    }

    .abilities {
      h3 {
        text-transform: uppercase;
      }

      *:nth-child(2) {
        margin: 0.5rem 0 0 0 !important;
      }
    }
  }

  .carousel__slide--active {
    transform: scale(1);
  }

  .carousel__slide--prev, .carousel__slide--next {
    transform: scale(0.95);
  }

  .carousel__navigation {
    button {
      border: 1px red solid;
    }
  }

</style>