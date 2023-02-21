<script setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid/index.js";

const props = defineProps({
  scores: {
    type: Array,
    default: []
  }
})
</script>
<template>
  <table class="table-auto text-base">
    <thead>
    <tr>
      <th class="pl-2">Score name</th>
      <th>Composer</th>
      <th>Availability</th>
      <th>Ensemble type</th>
      <th>Difficulty</th>
      <th>Details</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="score in scores" class="odd:bg-slate-50 hover:bg-slate-100">
        <td class="pl-2">{{ score.name }} <span v-if="!score.complete_score"><Badge variant="danger">Incomplete</Badge></span></td>
        <td>{{ score.composer.full_name }}</td>
        <td><Badge :variant="score.checked_out ? 'danger' : 'primary'"><span v-if="score.checked_out">Checked out</span><span v-else>Available</span></Badge></td>
        <td>{{ score.ensemble_type.ensemble_type }}</td>
        <td>{{ score.difficulty }}</td>
        <td><ButtonComponent variant="ghost">View more</ButtonComponent></td>
      </tr>
    </tbody>
  </table>
</template>
