import { debounce } from 'debounce'
import useBarChart from '../chartjs/useBarChart'
import useLineChart from '../chartjs/useLineChart'
import useAirAPI from '../api/useAirAPI'
import useGeocodingAPI from '../api/useGeocodingAPI'
import useConverters from '../global/useConverters'
import usePopup from '../global/usePopup'

const { formatTime } = useConverters()
const { updateBarItemField, getBarItem, barChartArray, addToBarChartArray, barData } = useBarChart()
const { startDate, endDate, lineData } = useLineChart()
const { fetchAirData, isAirPending, airError, airResponse } = useAirAPI()
const { fetchGeoData, isGeoPending, geoError, geoResponse } = useGeocodingAPI()
const { triggerPopup } = usePopup()

const useAirForm = () => {
  const locations = ref(null)
  const selectedLocation = computed(() => {
    return document.forms.air.locations.value
  })
  const locationData = computed(() => {
    if (locations.value && selectedLocation.value) {
      return locations.value[selectedLocation.value]
    }
    return null
  })
  const isPending = computed(() => {
    return isAirPending.value || isGeoPending.value
  })

  const resetForm = () => {
    locations.value = null
  }

  const getCoordinates = debounce(async (form) => {
    if (!form.city.value || !form.countries.value) {
      return
    }
    await fetchGeoData({
      service: 'getCoordinates',
      parameters: { city: form.city.value, country: form.countries.value, limit: 10 }
    })
    if (!geoError.value) {
      locations.value = geoResponse.value
    } else {
      triggerPopup()
    }
  }, 1000)

  const searchCity = debounce(async () => {
    if (locationData.value) {
      await loadBarChart()
      await loadLineChart()
    }
  }, 500)

  const loadBarChart = async () => {
    await fetchAirData({
      service: 'getAirPollution',
      parameters: { location: locationData.value }
    })
    if (!airError.value) {
      addToBarChartArray(document.forms.air, locations.value, airResponse.value)
      barData.value = barChartArray.value
    } else {
      triggerPopup()
    }
  }

  const loadLineChart = async () => {
    await fetchAirData({
      service: 'getAirHistory',
      parameters: { location: locationData.value, startDate: startDate.value, endDate: endDate.value }
    })
    if (!airError.value) {
      lineData.value = formatTime(airResponse.value.list, 'unix', ['dt'])
    } else {
      triggerPopup()
    }
  }

  const fetchStartingDataset = async () => {
    await fetchAirData({
      service: 'getAirPollution',
      parameters: { location: getBarItem('lessPolluted') }
    })
    if (!airError.value) {
      updateBarItemField('lessPolluted', 'components', airResponse.value.list[0].components)
    }
    await fetchAirData({
      service: 'getAirPollution',
      parameters: { location: getBarItem('mostPolluted') }
    })
    if (!airError.value) {
      updateBarItemField('mostPolluted', 'components', airResponse.value.list[0].components)
    }
  }

  return {
    locations,
    resetForm,
    getCoordinates,
    searchCity,
    fetchStartingDataset,
    isPending,
    airResponse
  }
}

export default useAirForm
