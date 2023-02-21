<script setup>
import NavLink from "./NavLink.vue";
</script>
<template>
<div class="inset-y-0 min-h-screen border-r border-slate-300 bg-slate-50 p-10 mr-2.5 prose">
  <div class="columns-1">
      <div>
        <router-link to="/" class="no-underline text-slate-800 font-cursive text-xl after:content-logo">
music . lib
        </router-link>
      </div>
      <div>
        <h3 class="uppercase font-light">Scores</h3>
      </div>
    <NavLink route="/">Dashboard</NavLink>
    <NavLink route="/scores">Score listing</NavLink>
    <div>
      <h3 class="uppercase font-light">Users</h3>
    </div>
  </div>
</div>
</template>
