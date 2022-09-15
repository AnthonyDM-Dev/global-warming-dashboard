import { getTime, sub } from 'date-fns'
const useChartFunctions = () => {
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
  const getTreeValue = (data, keysArray, index) => {
    if (index < (keysArray.length - 1)) {
      return getTreeValue(data[keysArray[index]], keysArray, index + 1)
    } else {
      return data[keysArray[index]]
    }
  }
  const parseData = (data, xValue, yValue) => {
    if (Array.isArray(xValue) || Array.isArray(yValue)) {
      return data.map((r) => {
        return {
          x: getTreeValue(r, xValue, 0), y: getTreeValue(r, yValue, 0)
        }
      })
    } else {
      return data.map((r) => {
        return {
          x: r[xValue], y: r[yValue]
        }
      })
    }
  }
  const filterData = (data, axis, filterType, filterValue) => {
    if (filterValue === 'all') {
      return data
    }
    switch (filterType) {
      case 'years': {
        const fromDay = getTime(sub(new Date(), { years: filterValue }))
        return data.filter((r) => {
          return r[axis] >= fromDay
        })
      }
      case 'months': {
        const fromDay = getTime(sub(new Date(), { months: filterValue }))
        return data.filter((r) => {
          return r[axis] >= fromDay
        })
      }
      default: {
        return data
      }
    }
  }
  const removeNoise = (data, key, value) => {
    return data.filter((a) => { return a[key] !== value })
  }

  return {
    updateChartData,
    updateMaxY,
    updateMinY,
    parseData,
    filterData,
    removeNoise
  }
}

export default useChartFunctions
