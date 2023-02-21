<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    validator(value) {
      return ['action', 'secondary', 'ghost', 'outline-red', 'outline-green'].includes(value)
    }
  }
})

const emit = defineEmits(['submit'])
const style = computed(() => {
  switch (props.variant) {
    case 'action':
      return 'border border-1 border-slate-500 bg-cyan-600 text-white hover:bg-cyan-700'
    case 'secondary':
      return 'border border-1 border-slate-500 bg-white hover:bg-slate-200'
    case 'ghost':
      return 'bg-transparent hover:text-slate-800 hover:underline'
    case 'outline-green':
      return 'border border-1 border-green-600 text-green-600 bg-transparent hover:bg-green-600 hover:text-white'
    case 'outline-red':
      return 'border border-1 border-red-600 text-red-600 bg-transparent hover:bg-red-600 hover:text-white'
    default:
      return ''
  }
})

function buttonClick() {
  emit('submit')
}

</script>

<template>
<button @click="buttonClick()" class="rounded m-2 p-2" :class="style">
<slot></slot>
</button>
</template>
