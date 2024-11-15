<template>
  <div class="flex flex-col my-2">
    <h1 class="text-2xl" v-if="detail.info.name">
      {{ detail.info.name }} - {{ detail.info.countryName }}
    </h1>
    <h1 class="text-2xl" v-else>Sin información</h1>
    <div class="py-3">Indice</div>
    <hr />
    <div class="grid grid-cols-3 py-4 w-full md:w-full lg:w-full xl:w-2/4">
      <div class="flex flex-row">
        <div class="w-full md:w-2/4">Valor Actual</div>
        <div class="text-right" v-if="detail.price.closePrice">
          {{ formatMoney(detail.price.closePrice) }}
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-full md:w-2/4">Var. % Actual</div>
        <div
          class="text-right"
          v-if="detail.price.performanceAbsolute"
          :class="[colorPercent(detail.price.performanceAbsolute)]"
        >
          {{ formaterPercentage(detail.price.performanceAbsolute) }}
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-full md:w-2/4">Var. Puntos Actual</div>
        <div
          class="text-right"
          v-if="detail.price.performanceRelative"
          :class="[colorPercent(detail.price.performanceRelative)]"
        >
          {{ formaterPercentage(detail.price.performanceRelative) }}
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { formatMoney, formaterPercentage } from '@/utils/formatter'
import { colorPercent } from '@/utils/styles'
import { DataSummary } from '@/interfaces/summary'
defineProps<{
  detail: DataSummary
}>()
</script>
