<script setup>
import SideNav from "../components/SideNav/SideNav.vue";
</script>

<template>
  <div class="flex">
    <SideNav/>
    <div class="p-5 m-5 prose">
      <router-view/>
    </div>
  </div>
</template>