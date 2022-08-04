import {
  getTime
} from 'date-fns'
export default {
  methods: {
    formatTime (results, timeType, timeFields) {
      if (timeType === 'number') {
        for (let i = 0; i < results.length; i++) {
          results[i].time = this.convertDecimalsToFullYear(results[i][timeFields[0]])
        }
      } else if (timeType === 'splittedData') {
        for (let i = 0; i < results.length; i++) {
          results[i].time = getTime(new Date(Number(results[i][timeFields[0]]), Number(results[i][timeFields[1]]), Number(results[i][timeFields[2]]) || null))
        }
      }
      return results
    },
    convertDecimalsToFullYear (yearInDecimals) {
      const decimals = Number(yearInDecimals.split('.')[1])
      const year = Number(yearInDecimals.split('.').shift())
      const month = Math.floor(decimals / 12) + 1
      const day = 1 // Data are so big that know the specific day is negligible
      return getTime(new Date(year, month, day))
    },
    updateChartData (settings, chartType, chartData) {
      settings[chartType].data = chartData
    },
    updateMinY (settings, array, fields, margin, initialValue) {
      const minValues = []
      for (let i = 0; i < fields.length; i++) {
        minValues.push(array.reduce((accumulator, curr) => { return accumulator < Number(curr[fields[i]]) ? accumulator : Number(curr[fields[i]]) }, initialValue))
      }
      console.log('min: ', minValues, Math.min(...minValues) - margin)
      settings.lineChart.options.scales.y.min = Math.min(...minValues) - margin
    },
    updateMaxY (settings, array, fields, margin, initialValue) {
      const maxValues = []
      for (let i = 0; i < fields.length; i++) {
        maxValues.push(array.reduce((accumulator, curr) => { return accumulator > Number(curr[fields[i]]) ? accumulator : Number(curr[fields[i]]) }, initialValue))
      }
      console.log('max: ', maxValues, Math.max(...maxValues) + margin)
      settings.lineChart.options.scales.y.max = Math.max(...maxValues) + margin
    }
  },
  computed: {
    isMobile () {
      return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768
    }
  }
}
