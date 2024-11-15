const formatMoney = (ammount: number) => {
  return ammount.toLocaleString('es-CL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

const formaterMM = (ammount: number) => {
  const formatter = Intl.NumberFormat('es', { notation: 'compact' })
  const million = formatter.format(ammount)

  return million
}

const formaterPercentage = (percent: number) => {
  if (percent > 0) {
    return `+${numberWithCommas(percent.toFixed(2))}%`
  }

  if (percent < 0) {
    return `${numberWithCommas(percent.toFixed(2))}%`
  }

  return numberWithCommas(percent.toFixed(2))
}

function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

export { formatMoney, formaterPercentage, formaterMM }
