<script setup>
import {nanoid} from "nanoid";
import {computed} from "vue";

const props = defineProps({
  modelValue: [Array, Boolean],
  value: String,
  label: String,
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
})

const id = nanoid()

</script>
<template>
  <input type="checkbox" :id="id" :value="value" :disabled="disabled"
         v-model="model"
         class="rounded border-slate-500 m-2 text-cyan-500 focus:ring focus:ring-opacity-80 focus:ring-cyan-500 checked:bg-cyan-500"/>
  <label :for="id">
    <slot></slot>
  </label>
</template>
