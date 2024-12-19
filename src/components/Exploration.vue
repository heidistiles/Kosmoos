<script setup>
import BaseTemplate from "../templates/BaseTemplate.vue";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation} from 'vue3-carousel'
import planetCards from "../data_sources/PlanetCardInfo.js"
import Card from "../components/Card.vue"
import {ref} from "vue";
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
    },
    1040: {
      itemsToShow: 3.35
    },
    1080: {
      itemsToShow: 3.5
    },
    1120: {
      itemsToShow: 3.65
    },
    1160: {
      itemsToShow: 3.8
    },
    1200: {
      itemsToShow: 3.95
    },
    1240: {
      itemsToShow: 4.1
    },
    1280: {
      itemsToShow: 4.25
    },
    1320: {
      itemsToShow: 4.4
    },
    1360: {
      itemsToShow: 4.55
    },
    1400: {
      itemsToShow: 4.7
    },
    1440: {
      itemsToShow: 4.85
    },
    1480: {
      itemsToShow: 5
    },
    1520: {
      itemsToShow: 5.15
    },
    1560: {
      itemsToShow: 5.3
    },
    1600: {
      itemsToShow: 5.45
    },
    1640: {
      itemsToShow: 5.6
    },
    1680: {
      itemsToShow: 5.75
    },
    1720: {
      itemsToShow: 5.9
    },
    1760: {
      itemsToShow: 6.05
    },
    1800: {
      itemsToShow: 6.2
    },
    1840: {
      itemsToShow: 6.35
    },
    1880: {
      itemsToShow: 6.5
    },
    1920: {
      itemsToShow: 6.65
    },
    1960: {
      itemsToShow: 6.8
    },
    2000: {
      itemsToShow: 6.95
    },
    2040: {
      itemsToShow: 7.1
    },
    2080: {
      itemsToShow: 7.25
    },
    2120: {
      itemsToShow: 7.4
    },
    2160: {
      itemsToShow: 7.55
    },
    2200: {
      itemsToShow: 7.7
    },
    2240: {
      itemsToShow: 7.85
    },
    2280: {
      itemsToShow: 8
    },
    2320: {
      itemsToShow: 8.15
    },
    2360: {
      itemsToShow: 8.3
    },
    2400: {
      itemsToShow: 8.45
    },
    2440: {
      itemsToShow: 8.6
    },
    2480: {
      itemsToShow: 8.75
    },
    2520: {
      itemsToShow: 8.9
    },
    2560: {
      itemsToShow: 9.05
    },
    2600: {
      itemsToShow: 9.2
    },
    2640: {
      itemsToShow: 9.35
    },
    2680: {
      itemsToShow: 9.5
    },
    2720: {
      itemsToShow: 9.65
    },
    2760: {
      itemsToShow: 9.8
    },
    2800: {
      itemsToShow: 9.9
    }
  }
};

document.title = 'Planetary Exploration Hub'
</script>

<template>
  <base-template>
    <carousel id="cardCarousel" ref="cardCarousel" v-bind="carouselSettings">
      <slide v-bind="slideSettings" v-for="(slide, index) in cards" :key="index" :slide="slide" class="slide">
       <router-link :to="'exploration-hub/info/' + slide.id">
        <card class="carousel__item" >
          <h2>{{ slide.planet_name }}</h2>

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
            <h4>Special Abilities</h4>
            <dash></dash>
            <h5>{{ slide.attack }}</h5>
            <h5>{{ slide.defense }}</h5>
          </section>
        </card>
        </router-link>
      </slide>
      <template #addons>
        <div class="cardButtons">
          <navigation></navigation>
        </div>
      </template>
    </carousel>
  </base-template>
</template>

<style scoped>
#cardCarousel {
  max-height: 65vh;
  max-width: 100vw;
}

.carousel__item {
  width: clamp(30rem, 90vw, 40vh);
  height: clamp(45rem, 135vw, 60vh);
}

.carousel__slide {
  transform: scale(0.9);
  opacity: 0.6;

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
    h4 {
      text-transform: uppercase;
    }

    *:nth-child(2) {
      margin: 0.5rem 0 0 0 !important;
    }
  }
}

.carousel__slide--active {
  transform: scale(1);
  opacity: 1;
}

.carousel__slide--prev, .carousel__slide--next {
  transform: scale(0.95);
  opacity: 0.8;
}
</style>

<style>
.carousel__prev, .carousel__next {
  width: 6.6rem;
  height: 6.6rem;

  &:hover {
    svg {
      fill: rgb(var(--bright-green));
    }
  }

  svg {
    width: 90%;
    height: 90%;
    background-color: var(--gray);
    border-radius: 7.5px;
    fill: var(--dark-gray);
  }
}



    @media (min-width: 1040px) {
      .carousel__slide--prev {
        margin-right: 1rem;
      }

      .carousel__slide--next {
        margin-left: 1rem;
      }

      .carousel__prev, .carousel__next {
        width: 8.8rem;
        height: 8.8rem;
        border-radius: 15px;
        margin: 0 7rem;
        position: absolute;
        z-index: 0;
      }

      .carousel__prev {
         padding: 40vh 20vw 40vh 1rem;
       }

      .carousel__next {
        padding: 40vh 1rem 40vh 20vw;
      }
    }
</style>