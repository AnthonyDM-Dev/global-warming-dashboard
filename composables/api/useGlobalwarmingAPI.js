import { ref, watchEffect } from '@nuxtjs/composition-api'
import Globalwarming from '../../services/api/Globalwarming'

export default function useGlobalwarmingAPI (dataObj) {
  const data = ref(null)
  const error = ref(null)
  const isPending = ref(false)

  const stop = watchEffect(async () => {
    isPending.value = true
    data.value = null
    error.value = null
    await Globalwarming[dataObj().service]()
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
