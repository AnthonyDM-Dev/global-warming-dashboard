import { ref } from '@nuxtjs/composition-api'
import OWGeocoding from '../../services/api/OWGeocoding'

const geoResponse = ref(null)
const geoError = ref(null)
const isGeoPending = ref(false)

const useGeocodingAPI = () => {
  const fetchGeoData = async (options) => {
    isGeoPending.value = true
    geoResponse.value = null
    geoError.value = null
    await OWGeocoding[options.service](options.parameters)
      .then((res) => {
        geoResponse.value = res.data
        isGeoPending.value = false
      })
      .catch((e) => {
        geoError.value = e
        isGeoPending.value = false
      })
  }

  return {
    geoResponse,
    geoError,
    isGeoPending,
    fetchGeoData
  }
}

export default useGeocodingAPI
