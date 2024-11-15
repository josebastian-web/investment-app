<template>
  <div class="mb-4">
    <AutoComplete
      class="inputSearch"
      v-model="selectedInstrument"
      :suggestions="filteredInstrument"
      @complete="search"
      optionLabel="name"
      variant="filled"
      dropdown
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AutoComplete from 'primevue/autocomplete'
import { useInvestmentStore } from '@/stores/investments'

const props = defineProps<{
  list: string[]
}>()
const selectedInstrument = ref('')
const filteredInstrument = ref([])

const useStore = useInvestmentStore()

watch(selectedInstrument, (newValue) => {
  useStore.setSelectedConstituenChart(newValue.codeInstrument)
  useStore.setSelectedConstituenSummary(newValue.codeInstrument)
})

function search(event) {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredInstrument.value = [...props.list]
    } else {
      filteredInstrument.value = props.list.filter((instrument) => {
        return instrument.name.toLowerCase().includes(event.query.toLowerCase())
      })
    }
  }, 250)
}
</script>
<style>
.p-autocomplete {
  width: 100%;
}

.inputSearch > .p-inputtext {
  background-image: url('../assets/search.svg');
  background-size: 1.5em;
  background-position: left;
  background-repeat: no-repeat;
  text-indent: 30px;
  width: 100%;
}
</style>
