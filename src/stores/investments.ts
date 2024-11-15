import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
// Interfaces
import type { Constituent } from '@/interfaces/constituensList'
import type { DataHistory, ChartHistory, InfoHistory } from '@/interfaces/history'
import type { DataSummary, InfoSummary, PriceSummary } from '@/interfaces/summary'
// Data
import { data } from '@/data/constituyentes/constituensList.json'

export const useInvestmentStore = defineStore('investment', () => {
  const constituensList: Constituent[] = reactive([])
  const selectedConstituenChart: DataHistory = reactive({
    info: {} as InfoHistory,
    chart: [] as ChartHistory[],
  })
  const selectedConstituenSummary: DataSummary = reactive({
    info: {} as InfoSummary,
    price: {} as PriceSummary,
  })

  const favoriteInstruments = [
    {
      code: 'IPSA',
      shortName: 'IPSA',
    },
    {
      code: 'IGPA',
      shortName: 'IGPA',
    },
    {
      code: 'NASDAQ',
      shortName: 'NASDAQ',
    },
    {
      code: 'DOWJONES',
      shortName: 'DOW JONES',
    },
    {
      code: 'SPBLV',
      shortName: 'SP/BLV',
    },
  ]
  const getSelectedChart = computed(() => {
    return selectedConstituenChart
  })
  const getSelectedSummary = computed(() => {
    return selectedConstituenSummary
  })
  const getFavoriteInstruments = computed(() => {
    return favoriteInstruments
  })

  function setConstituenList() {
    data.constituents.forEach((element) => {
      constituensList.push(element)
    })
  }

  function setSelectedConstituenChart(codeInstrument: string) {
    const filesHistory = import.meta.glob('../data/history/*.json')
    if (filesHistory[`../data/history/history-${codeInstrument}.json`]) {
      import(`@/data/history/history-${codeInstrument}.json`).then((module) => {
        selectedConstituenChart.info = module.default.data.info
        selectedConstituenChart.chart = module.default.data.chart
      })
    } else {
      selectedConstituenChart.info = {} as InfoHistory
      selectedConstituenChart.chart = []
    }
  }

  function setSelectedConstituenSummary(codeInstrument: string) {
    const filesSummary = import.meta.glob('../data/resumen/*.json')
    if (filesSummary[`../data/resumen/${codeInstrument}.json`]) {
      import(`@/data/resumen/${codeInstrument}.json`).then((module) => {
        selectedConstituenSummary.info = module.default.data.info
        selectedConstituenSummary.price = module.default.data.price
      })
    } else {
      selectedConstituenSummary.info = {} as InfoSummary
      selectedConstituenSummary.price = {} as PriceSummary
    }
  }

  return {
    constituensList,
    favoriteInstruments,
    getFavoriteInstruments,
    getSelectedChart,
    getSelectedSummary,
    setConstituenList,
    setSelectedConstituenChart,
    setSelectedConstituenSummary,
  }
})
