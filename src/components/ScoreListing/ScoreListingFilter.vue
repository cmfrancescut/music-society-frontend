<script setup>
import {ref} from "vue";

const ensembleFilter = ref([])
const availabilityFilter = ref([])
const difficultyFilter = ref([])
const completeFilter = ref([])
const scoreNameFilter = ref()
const composerNameFilter = ref()

const availabilityOptions = [
  {name: 'Available', value: 'available', checked: false, disabled: false},
  {name: 'Checked out', value: 'not_available', checked: false, disabled: false}
]

const ensembleOptions = [
  {name: 'Choir', value: 'choir', checked: false, disabled: false},
  {name: 'Concert band', value: 'band', checked: false, disabled: false},
  {name: 'String orchestra', value: 'strings', checked: false, disabled: false},
  {name: 'Jazz band', value: 'jazz', checked: false, disabled: false}
]

const difficultyOptions = [
  {name: 'Grade 1', value: '1', checked: false, disabled: false},
  {name: 'Grade 2', value: '2', checked: false, disabled: false},
  {name: 'Grade 3', value: '3', checked: false, disabled: false},
  {name: 'Grade 4', value: '4', checked: false, disabled: false},
  {name: 'Grade 5', value: '5', checked: false, disabled: false},
  {name: 'Beginner', value: 'beginner', checked: false, disabled: false},
  {name: 'Intermediate', value: 'intermediate', checked: false, disabled: false},
  {name: 'Advanced', value: 'advanced', checked: false, disabled: false},
]

const completeOptions = [
  {name: 'Complete', value: 'complete', checked: false, disabled: false},
  {name: 'Incomplete', value: 'incomplete', checked: false, disabled: false}
]

function clearFilters() {
  ensembleFilter.value = []
  availabilityFilter.value = []
  difficultyFilter.value = []
  completeFilter.value = []
  scoreNameFilter.value = ''
  composerNameFilter.value = ''
}

</script>
<template>
  <div class="prose max-w-none border border-1 border-slate-300 rounded bg-slate-50 w-full p-5">
    <h3>Filters</h3>
    <div class="grid grid-cols-6">
      <div class="grid grid-cols-1 place-content-start gap-y-2">
        <div>
          <div><b>Score availability</b></div>
          <div v-for="availability in availabilityOptions">
            <Checkbox :value="availability.value" v-model="availabilityFilter" :checked="availability.checked"
                      :disabled="availability.disabled">{{ availability.name }}
            </Checkbox>
          </div>
        </div>
        <div>
          <div><b>Score completeness</b></div>
          <div v-for="complete in completeOptions">
            <Checkbox :value="complete.value" v-model="completeFilter" :checked="complete.checked"
                      :disabled="complete.disabled">{{ complete.name }}
            </Checkbox>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 place-content-start">
        <div><b>Ensemble type</b></div>
        <div v-for="ensemble in ensembleOptions">
          <Checkbox :value="ensemble.value" v-model="ensembleFilter" :checked="ensemble.checked"
                    :disabled="ensemble.disabled">{{ ensemble.name }}
          </Checkbox>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2 grid-rows-5 grid-flow-col place-content-start">
        <div class="col-span-2"><b>Level of difficulty</b></div>
        <div v-for="difficulty in difficultyOptions">
          <Checkbox :value="difficulty.value" v-model="difficultyFilter" :checked="difficulty.checked"
                    :disabled="difficulty.disabled">{{ difficulty.name }}
          </Checkbox>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-1 pr-24 place-content-start gap-y-4">
        <div><TextInput v-model="scoreNameFilter">Score name</TextInput></div>
        <div><TextInput v-model="composerNameFilter">Label name</TextInput></div>
      </div>
      <div class="col-span-full">
        <ButtonComponent class="float-right" variant="secondary" @submit="clearFilters">Clear filters
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>
