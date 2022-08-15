const getChartFunctions = () => {
  const updateChartData = (settings, chartType, chartData) => {
    settings[chartType].data = chartData
  }
  const updateMinY = (settings, array, fields, margin, initialValue, yAxis) => {
    const minValues = []
    for (let i = 0; i < fields.length; i++) {
      minValues.push(array.reduce((accumulator, curr) => { return accumulator < Number(curr[fields[i]]) ? accumulator : Number(curr[fields[i]]) }, initialValue))
    }
    settings.lineChart.options.scales[yAxis].min = Math.min(...minValues) - margin
  }
  const updateMaxY = (settings, array, fields, margin, initialValue, yAxis) => {
    const maxValues = []
    for (let i = 0; i < fields.length; i++) {
      maxValues.push(array.reduce((accumulator, curr) => { return accumulator > Number(curr[fields[i]]) ? accumulator : Number(curr[fields[i]]) }, initialValue))
    }
    settings.lineChart.options.scales[yAxis].max = Math.max(...maxValues) + margin
  }
  const parseData = (data, xValue, yValue) => {
    return data.map((r) => {
      return {
        x: r[xValue], y: r[yValue]
      }
    })
  }

  return {
    updateChartData,
    updateMaxY,
    updateMinY,
    parseData
  }
}

export default getChartFunctions
