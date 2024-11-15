<template>
  <div class="p-4">
    <SearchBar :list="constituensList" />
    <div class="flex">
      <div class="flex-initial w-2/3">
        <Header :detail="getSelectedSummary" />
        <Chart :history="getSelectedChart" />
      </div>
      <div class="flex-initial w-1/3">
        <Summary :detail="getSelectedSummary" />
      </div>
    </div>
    <div class="flex">
      <div class="flex-initial w-full">
        <Tab :favoriteInstruments="getFavoriteInstruments" />
        <div class="grid gap-4 grid-cols-2">
          <InstrumentList :list="constituensList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Chart, Summary, Header, Tab, InstrumentList, SearchBar } from '@/components'
import { useInvestmentStore } from '@/stores/investments.ts'

const useStore = useInvestmentStore()

const { constituensList, getSelectedChart, getSelectedSummary, getFavoriteInstruments } =
  storeToRefs(useStore)

onMounted(() => {
  useStore.setConstituenList()
  useStore.setSelectedConstituenChart('IPSA')
  useStore.setSelectedConstituenSummary('IPSA')
})
</script>
