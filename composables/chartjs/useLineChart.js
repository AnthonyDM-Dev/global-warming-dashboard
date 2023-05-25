import useConverters from '../global/useConverters'
import useChartFunctions from './useChartFunctions'

const { convertDateToUnix, subtractFromDate } = useConverters()
const { parseData } = useChartFunctions()

const lineData = ref(null)
const lineFilteredData = ref(null)
const lineChartData = ref(null)
const hasLineFilteredData = computed(() => {
  return lineFilteredData.value != null
})

const useLineChart = () => {
  const startDate = ref(convertDateToUnix(new Date(2019, 10, 27)))
  const endDate = ref(convertDateToUnix(subtractFromDate(new Date(), { months: 1 })))
  const setLineChartData = (config, mobileConfig, isMobile, fieldsToParse) => {
    lineChartData.value = config
    if (isMobile) {
      setLineChartMobileData(mobileConfig)
    }
    setLineChartLabels(fieldsToParse)
    setFieldsToParse(fieldsToParse)
  }
  const setLineChartMobileData = (mobileConfig) => {
    if (!mobileConfig) {
      return
    }
    for (let x = 0; x < mobileConfig.length; x++) {
      const keys = Object.keys(mobileConfig[x])
      const values = Object.values(mobileConfig[x])
      for (let y = 0; y < keys.length; y++) {
        lineChartData.value.datasets[keys[y]] = values[y]
      }
    }
  }
  const setLineChartLabels = (fields) => {
    const key = fields[0].x[0]
    lineChartData.value.labels = lineFilteredData.value.map((r) => {
      return r[key]
    })
  }
  const setFieldsToParse = (fields) => {
    for (let x = 0; x < fields.length; x++) {
      lineChartData.value.datasets[x].data = parseData(lineFilteredData.value, fields[x].x, fields[x].y)
    }
  }

  const resetLineChart = () => {
    lineData.value = null
  }

  watch(lineData, (newVal) => {
    lineFilteredData.value = newVal
  }, { deep: true })

  return {
    lineData,
    lineFilteredData,
    lineChartData,
    hasLineFilteredData,
    startDate,
    endDate,
    setLineChartData,
    resetLineChart
  }
}

export default useLineChart
