<script setup>
import SideNav from "../components/SideNav/SideNav.vue";
</script>

<template>
  <div class="grid grid-cols-12 gap-4 prose max-w-none">
    <div class="col-span-2">
      <SideNav/>
    </div>
    <div class="col-span-10">
      <router-view/>
    </div>
  </div>
</template>