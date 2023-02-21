<script setup>
import {ChevronRightIcon} from "@heroicons/vue/20/solid/index.js";
import ScoreListingFilter from "../components/ScoreListing/ScoreListingFilter.vue";
import {useScoresStore} from "../stores/useScoresStore";
import {onMounted, ref} from "vue";
import ScoreListingTable from "../components/ScoreListing/ScoreListingTable.vue";

const store = useScoresStore()
const scores = ref([])

onMounted(() => {
  populateTable();
});

async function populateTable() {
  await store.fetchScores()
      .then(() => {
        scores.value = store.scores;
      });
}

</script>
<template>
  <div class="flex flex-col w-full h-full place-content-stretch">
    <div class="basis-5">
      <ul class="list-none inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link class="no-underline font-normal hover:underline" to="/">Dashboard</router-link>
        </li>
        <li class="inline-flex items-center">
          <ChevronRightIcon class="h-6 w-6 stroke-1"/>
        </li>
        <li class="inline-flex items-center">Score listing</li>
      </ul>
    </div>
    <div class="px-8 basis-full">
      <div><h1>Score listing</h1></div>
      <div>
        <ScoreListingFilter/>
        <ScoreListingTable :scores="scores"/>
      </div>
    </div>
  </div>

</template>
