export interface HistoryResponse {
  success: boolean
  code: number
  data: DataHistory
}

export interface DataHistory {
  info: InfoHistory
  chart: ChartHistory[]
}

export interface InfoHistory {
  name: string
  shortName: string
  countryName: string
  currencyName: string
  currencySymbol: string
  codeInstrument: string
  hourOpen: string
  hourClose: string
}

export interface ChartHistory {
  datetimeLastPrice: string
  datetimeLastPriceTs: number
  lastPrice: number
  highPrice: number
  lowPrice: number
  openPrice: number
  closePrice: number
  volume: number
  volumeMoney: number
  performanceRelative: number
  performanceAbsolute: number
  tend: string
}
