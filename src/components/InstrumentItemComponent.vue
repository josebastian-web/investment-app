<template>
  <div class="table-row hover:bg-gray-500 cursor-pointer">
    <div class="table-cell">{{ instrument.shortName }}</div>
    <div class="table-cell text-right">{{ formatMoney(instrument.lastPrice) }}</div>
    <div class="table-cell text-right">{{ formaterMM(instrument.accumulatedVolumeMoney) }}</div>
    <div class="table-cell text-right" :class="[colorPercent(instrument.pctDay)]">
      {{ formaterPercentage(instrument.pctDay) }}
    </div>
    <div class="table-cell text-right" :class="[colorPercent(instrument.pct30D)]">
      {{ formaterPercentage(instrument.pct30D) }}
    </div>
    <div class="table-cell text-right" :class="[colorPercent(instrument.pctCY)]">
      {{ formaterPercentage(instrument.pctCY) }}
    </div>
    <div class="table-cell text-right" :class="[colorPercent(instrument.pct1Y)]">
      {{ formaterPercentage(instrument.pct1Y) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Constituent } from '@/interfaces/constituensList'
import { formatMoney, formaterPercentage, formaterMM } from '@/utils/formatter'
import { colorPercent } from '@/utils/styles'

defineProps<{
  instrument?: Constituent
}>()
</script>
