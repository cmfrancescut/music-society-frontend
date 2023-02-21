<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    validator(value) {
      return ['primary', 'secondary', 'warning', 'danger', 'info', 'success'].includes(value)
    }
  }
})

const style = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'border-cyan-600 bg-cyan-100 text-cyan-600'
    case 'secondary':
      return 'border-purple-600 bg-purple-100 text-purple-600'
    case 'success':
      return 'border-green-600 bg-green-100 text-green-600'
    case 'warning':
      return 'border-yellow-400 bg-yellow-100 text-yellow-700'
    case 'danger':
      return 'border-red-600 bg-red-100 text-red-600'
    case 'info':
      return 'border-blue-600 bg-blue-100 text-blue-600'
    default:
      return 'border-slate-500'
  }
})
</script>
<template>
  <div
      class="rounded-full border border-1 px-3 max-w-xs inline-flex items-center text-sm"
      :class="style"
  >
    <slot></slot>
  </div>

</template>
