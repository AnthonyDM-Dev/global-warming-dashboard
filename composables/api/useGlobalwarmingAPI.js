import { ref } from '@nuxtjs/composition-api'
import Globalwarming from '../../services/api/Globalwarming'

export default function useGlobalwarmingAPI (options) {
  const data = ref(null)
  const error = ref(null)
  const isPending = ref(false)

  const fetchWarmingData = async () => {
    isPending.value = true
    data.value = null
    error.value = null
    await Globalwarming[options.service]()
      .then((res) => {
        data.value = res.data
        isPending.value = false
      })
      .catch((e) => {
        error.value = e
        isPending.value = false
      })
  }

  return {
    data,
    error,
    isPending,
    fetchWarmingData
  }
}
