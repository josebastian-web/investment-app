<template>
  <div class="table w-full" v-for="(instrument, index) in divideInstruments" :key="index">
    <div class="table-header-group">
      <div class="table-row">
        <div class="table-cell text-left py-2 border-y-2 border-gray-600">Nombre</div>
        <div class="table-cell text-right py-2 border-y-2 border-gray-600">Último*</div>
        <div class="table-cell text-right py-2 border-y-2 border-gray-600">Monto (MM)</div>
        <div class="table-cell text-right py-2 border-y-2 border-gray-600">Var día</div>
        <div class="table-cell text-right py-2 border-y-2 border-gray-600">Var 30d**</div>
        <div class="table-cell text-right py-2 border-y-2 border-gray-600">Año Actual</div>
        <div class="table-cell text-right py-2 border-y-2 border-gray-600">12 Meses</div>
      </div>
    </div>
    <div class="table-row-group">
      <InstrumentItem
        v-for="(item, i) in instrument"
        :key="i"
        @click="selectInstrument(item.codeInstrument)"
        :instrument="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useInvestmentStore } from '@/stores/investments'
import { InstrumentItem } from '@/components'

const props = defineProps<{
  list: string[]
}>()

const useStore = useInvestmentStore()

const selectInstrument = (codeInstrument: string) => {
  useStore.setSelectedConstituenChart(codeInstrument)
  useStore.setSelectedConstituenSummary(codeInstrument)
}

const divideInstruments = computed(() => {
  const first = props.list.slice(0, props.list.length / 2)
  const second = props.list.slice(props.list.length / 2)

  return [first, second]
})
</script>
