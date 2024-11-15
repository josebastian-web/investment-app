<template>
  <div>
    <LineChart v-bind="lineChartProps" />
    <div>
      <Button label="1D" severity="secondary" class="bg-slate-600 rounded-r-none" />
      <Button label="1S" severity="secondary" class="rounded-none" />
      <Button label="1M" severity="secondary" class="rounded-none" />
      <Button label="3M" severity="secondary" class="rounded-none" />
      <Button label="6M" severity="secondary" class="rounded-none" />
      <Button label="1A" severity="secondary" class="rounded-none" />
      <Button label="5A" severity="secondary" class="rounded-s-none" />
      <Button label="" icon="pi pi-calendar" severity="secondary" class="ml-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LineChart, useLineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import Button from 'primevue/button'
import { DataHistory } from '@/interfaces/history'

Chart.register(...registerables)

const props = defineProps<{
  history: DataHistory
}>()

const dataValues = computed(() => {
  if (props.history.chart.length > 0) {
    return props.history.chart.map((c) => c.closePrice)
  }
  return []
})
const dataLabels = computed(() => {
  if (props.history.chart.length > 0) {
    return props.history.chart.map((c) => c.datetimeLastPrice)
  }
  return []
})

const chartData = computed(() => {
  return {
    labels: dataLabels.value,
    datasets: [
      {
        fill: true,
        data: dataValues.value,
        borderColor: '#2196f3',
        backgroundColor: 'rgba(59, 130, 246, .1)',
        borderWidth: 1,
      },
    ],
  }
})

const options = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        display: false, // Hides only the labels of the x-axis
      },
    },
  },
  elements: {
    point: {
      radius: 3,
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      usePointStyle: false,
    },
  },
}))

const { lineChartProps } = useLineChart({
  chartData,
  options,
})
</script>
<style scoped></style>
