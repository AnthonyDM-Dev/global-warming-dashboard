import { ref, watchEffect } from '@nuxtjs/composition-api'
import OWGeocoding from '../../services/api/OWGeocoding'

export default function useAirAPI (dataObj) {
  const data = ref(null)
  const error = ref(null)
  const isPending = ref(false)

  const stop = watchEffect(async () => {
    isPending.value = true
    data.value = null
    error.value = null
    await OWGeocoding[dataObj().service](dataObj().parameters)
      .then((res) => {
        data.value = res.data
        isPending.value = false
      })
      .catch((e) => {
        error.value = e
        isPending.value = false
      })
  })

  stop()

  return {
    data,
    error,
    isPending
  }
}
