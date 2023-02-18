<script setup>
const props = defineProps({
  route: String
})
</script>

<template>
  <div class="border-r-2 border-transparent hover:border-r-2 hover:border-cyan-500">
    <router-link :to="props.route" class="no-underline font-light mr-4">
      <slot></slot>
    </router-link>
  </div>
</template>
