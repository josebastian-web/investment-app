<template>
  <Tabs value="IPSA">
    <TabList>
      <Tab v-for="(item, index) in favoriteInstruments" :key="index" :value="item.code">
        <a @click="selectInstrument(item.code)" class="flex items-center gap-2 text-inherit">
          <span>{{ item.shortName }}</span>
        </a>
      </Tab>
    </TabList>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import { useInvestmentStore } from '@/stores/investments'

const useStore = useInvestmentStore()
const selectInstrument = (codeInstrument: string) => {
  useStore.setSelectedConstituenChart(codeInstrument)
  useStore.setSelectedConstituenSummary(codeInstrument)
}

defineProps<{
  favoriteInstruments: string[]
}>()
</script>
