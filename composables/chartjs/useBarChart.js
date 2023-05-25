import useConverters from '../global/useConverters'
import useComparisonData from './useComparisonData'
import useChartFunctions from './useChartFunctions'

const { parseData } = useChartFunctions()
const { startingDataset } = useComparisonData()
const { capitalize } = useConverters()

const barData = ref(null)
const barChartData = ref(null)
const barChartArray = ref(startingDataset.value)
const hasBarData = computed(() => {
  return barData.value != null
})

const useBarChart = () => {
  const updateBarItemField = (type, key, value) => {
    const item = getBarItem(type)
    item[key] = value
  }
  const getBarItem = (type) => {
    return barChartArray.value.find((item) => { return item.type === type })
  }
  const addToBarChartArray = (form, locations, apiResult) => {
    const itemToAdd = {
      type: 'searched',
      city: capitalize(form.city.value) + ' - (' + form.countries.value + ')',
      state: form.countries.value,
      lat: locations[form.locations.value].lat,
      lon: locations[form.locations.value].lon,
      components: apiResult.list[0].components
    }
    resetToDefaultArray()
    barChartArray.value.push(itemToAdd)
  }
  const resetToDefaultArray = () => {
    barChartArray.value = barChartArray.value.filter((location) => {
      return location.type !== 'searched'
    })
  }
  const setBarChartData = (config, mobileConfig, isMobile, fieldsToParse) => {
    barChartData.value = config
    if (isMobile) {
      setBarChartMobileData(mobileConfig)
    }
    setBarChartLabels(fieldsToParse)
    setFieldsToParse(fieldsToParse)
  }
  const setBarChartMobileData = (mobileConfig) => {
    for (let x = 0; x < mobileConfig.length; x++) {
      const keys = Object.keys(mobileConfig[x])
      const values = Object.values(mobileConfig[x])
      for (let y = 0; y < keys.length; y++) {
        barChartData.value.datasets[keys[y]] = values[y]
      }
    }
  }
  const setBarChartLabels = (fields) => {
    const key = fields[0].x[0]
    barChartData.value.labels = barData.value.map((r) => {
      return r[key]
    })
  }
  const setFieldsToParse = (fields) => {
    for (let x = 0; x < fields.length; x++) {
      barChartData.value.datasets[x].data = parseData(barData.value, fields[x].x, fields[x].y)
    }
  }

  return {
    barData,
    hasBarData,
    barChartData,
    barChartArray,
    updateBarItemField,
    getBarItem,
    addToBarChartArray,
    resetToDefaultArray,
    setBarChartData
  }
}

export default useBarChart
