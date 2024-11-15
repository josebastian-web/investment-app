<template>
  <div v-if="detail.info.name" class="card h-full">
    <Tabs value="1">
      <TabList class="grid">
        <Tab class="justify-self-center" value="0">Resumen</Tab>
        <Tab value="1">Detalles</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col">
            <div class="grid grid-cols-2 pb-2">
              <div class="">Nombre</div>
              <div class="text-right">{{ detail.info.name }}</div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">Hora de Apertura</div>
              <div class="text-right">{{ detail.info.hourOpen }}</div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">Hora de Cierre</div>
              <div class="text-right">{{ detail.info.hourClose }}</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col">
            <div class="grid grid-cols-2 pb-2">
              <div class="">Cotización</div>
              <div class="text-right">{{ detail.price.askDatetime }}</div>
            </div>
            <hr />
            <div class="grid grid-cols-2 pb-2">
              <div class="">Mercado</div>
              <div class="text-right">{{ detail.info.marketName }}</div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">APERTURA</div>
              <div class="text-right">{{ detail.price.closePrice }}</div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">CIERRE ANTERIOR</div>
              <div class="text-right">{{ detail.price.closePrice }}</div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">MÁXIMO DIARIO</div>
              <div class="text-right">{{ detail.price.closePrice }}</div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">MÍNIMO DIARIO</div>
              <div class="text-right">{{ detail.price.closePrice }}</div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">MÁXIMO 52 SEMANAS</div>
              <div class="text-right">{{ detail.price.closePrice }}</div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">MÍNIMO 52 SEMANAS</div>
              <div class="text-right">{{ detail.price.closePrice }}</div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">Variación**</div>
              <div class="text-right">%</div>
            </div>
            <hr />
            <div class="grid grid-cols-2 pb-2">
              <div class="">1 MES</div>
              <div class="text-right" :class="[colorPercent(detail.price.pct30D)]">
                {{ formaterPercentage(detail.price.pct30D) }}
              </div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">1 AÑO</div>
              <div class="text-right" :class="[colorPercent(detail.price.pctRelW52)]">
                {{ formaterPercentage(detail.price.pctRelW52) }}
              </div>
            </div>
            <div class="grid grid-cols-2 pb-2">
              <div class="">AÑO A LA FECHA</div>
              <div class="text-right" :class="[colorPercent(detail.price.pctRelCY)]">
                {{ formaterPercentage(detail.price.pctRelCY) }}
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
  <div v-else class="text-center">Sin Información</div>
</template>

<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
// Interfaces
import { DataSummary } from '@/interfaces/summary'
// Formatters
import { formaterPercentage } from '@/utils/formatter'
import { colorPercent } from '@/utils/styles'

defineProps<{
  detail: DataSummary
}>()
</script>

<style scoped>
.p-tablist-tab-list {
  justify-content: center;
}
.p-tab {
  width: 50%;
}
</style>
