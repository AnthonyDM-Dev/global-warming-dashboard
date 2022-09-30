import { ref } from '@nuxtjs/composition-api'

const useComparisonData = () => {
  const startingDataset = ref([
    { type: 'lessPolluted', city: 'Calgary', state: 'CA', lat: 51.0460954, lon: -114.065465, components: null },
    { type: 'mostPolluted', city: 'Hotan City', state: 'CH', lat: 37.1126842, lon: 79.9111626, components: null }
  ])

  return {
    startingDataset
  }
}

export default useComparisonData
