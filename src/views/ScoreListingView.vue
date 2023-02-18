<script setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid/index.js";
</script>
<template>
  <div class="flex"><ul class="list-none inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center"><router-link class="no-underline font-normal hover:underline" to="/">Dashboard</router-link></li>
    <li class="inline-flex items-center"><ChevronRightIcon class="h-6 w-6 stroke-1"/></li>
    <li class="inline-flex items-center">Score listing</li>
  </ul></div>
  <div class="pl-10">
    <h3>Score listing</h3>
  </div>

</template>
