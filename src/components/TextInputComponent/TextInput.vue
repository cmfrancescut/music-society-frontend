<script setup>
import {nanoid} from "nanoid";

defineProps(['modelValue'])
defineEmits(['update:modelValue'])

const id = nanoid()

</script>
<template>
  <div class="grid grid-cols-1 gap-y-0.5">
  <label :for="id">
    <slot></slot>
  </label>
  <input type="text"
         :id="id"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
         class="rounded border border-1 border-slate-500 focus:ring focus:ring-cyan-500 focus:outline-none"/>
  </div>
</template>
