import { ref, watch, reactive } from '@nuxtjs/composition-api'
import { debounce } from 'debounce'
import useLineChart from '../chartjs/useLineChart'
import useAirAPI from '../api/useAirAPI'
import useGeocodingAPI from '../api/useGeocodingAPI'

const {
  startDate, endDate
} = useLineChart()

const useAirForm = () => {
  const airForm = ref(null)
  const locations = ref(null)
  const airResponse = ref(null)
  const historyResponse = ref(null)
  const coordsResponse = ref(null)

  const resetForm = () => {
    locations.value = null
  }

  const searchCity = debounce((form) => {
    airResponse.value = useAirAPI(() => { return { service: 'getAirPollution', parameters: locations.value[form.locations.value] } })
    historyResponse.value = useAirAPI(() => { return { service: 'getAirHistory', parameters: { location: locations.value[form.locations.value], startDate: startDate.value, endDate: endDate.value } } })
  }, 500)

  watch(coordsResponse, (newVal) => {
    if (newVal.data) {
      locations.value = coordsResponse.value.data
    }
  }, { deep: true })

  const getCoordinates = debounce((form) => {
    if (!form.city.value || !form.countries.value) {
      return
    }
    coordsResponse.value = useGeocodingAPI(() => { return { service: 'getCoordinates', parameters: { city: form.city.value, country: form.countries.value, limit: 10 } } })
  }, 1000)

  const resWatcher = reactive({ isPending: false, error: null })
  watch([airResponse, historyResponse, coordsResponse], (newVal) => {
    resWatcher.isPending = newVal.map((res) => { return res?.isPending || false }).includes(true)
    resWatcher.error = newVal.find((res) => { return res?.error })
  }, { deep: true })

  return {
    airForm,
    locations,
    resetForm,
    searchCity,
    getCoordinates,
    airResponse,
    historyResponse,
    resWatcher
  }
}

export default useAirForm
