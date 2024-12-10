import {createRouter, createWebHistory} from 'vue-router'

import Archives from "./components/Archives.vue";
import Artifact from "./components/Artifact.vue";
import Challenge from "./components/Challenge.vue";
import Control from "./components/Control.vue";
import Exploration from "./components/Exploration.vue";
import Inventory from "./components/Inventory.vue";
import Planet from "./components/Planet.vue";
import Protocol from "./components/Protocol.vue";
import Resources from "./components/Resources.vue";
import Results from "./components/Results.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        //Home
        {
            path: "/",
            redirect: {name: 'Control'}
        },

        {
            path: '/mission-control',
            name: 'Control',
            component: Control
        },

        //Planet Start
        {
            path: '/exploration-hub',
            name: 'Exploration',
            children: [
                {
                    path: '',
                    name: 'ExplorationHub',
                    component: Exploration,
                },

                // Planet Details
                {
                    path: 'info/:planetName',
                    name: 'PlanetDetails',
                    component: Planet
                },

                //Planet Tests
                {
                    path: 'challenge/:questionId',
                    name: 'ChallengeQuestion',
                    component: Challenge
                },

                //Test Results
                {
                    path: 'challenge/results',
                    name: 'Results',
                    component: Results
                },
            ]
        },

        //Achievement Start
        {
            path: '/artifact-inventory',
            name: 'Artifacts',
            children: [
                {
                    path: '',
                    name: 'ArtifactInventory',
                    component: Inventory
                },

                //Achievement Info
                {
                    path: 'schematics/:artifactId',
                    name: 'Artifact',
                    component: Artifact
                },
            ]
        },

        //Research Start
        {
            path: '/research-archives',
            name: 'Archives',
            children: [
                {
                    path: '',
                    name: 'ResearchArchives',
                    component: Archives
                },

                // Research Info
                {
                    path: 'resources/:type',
                    name: 'ResearchResources',
                    component: Resources,
                }
            ]
        },

        //Site Purpose
        {
            path: '/protocol',
            name: 'Protocol',
            component: Protocol
        }
    ]
})

export default router