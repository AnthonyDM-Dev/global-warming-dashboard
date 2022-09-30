import { ref } from '@nuxtjs/composition-api'
import OWAirPollution from '../../services/api/OWAirPollution'

const airResponse = ref(null)
const airError = ref(null)
const isAirPending = ref(false)

const useAirAPI = () => {
  const fetchAirData = async (options) => {
    isAirPending.value = true
    airResponse.value = null
    airError.value = null
    await OWAirPollution[options.service](options.parameters)
      .then((res) => {
        airResponse.value = res.data
        isAirPending.value = false
      })
      .catch((e) => {
        airError.value = e
        isAirPending.value = false
      })
  }

  return {
    airResponse,
    airError,
    isAirPending,
    fetchAirData
  }
}

export default useAirAPI
