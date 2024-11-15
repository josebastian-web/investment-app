const colorPercent = (percent: number) => {
  if (percent > 0) {
    return 'text-green-400'
  }

  if (percent < 0) {
    return 'text-red-600'
  }

  return ''
}

export { colorPercent }
