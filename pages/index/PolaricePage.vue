<template>
  <div class="polarice-page child-page" :style="{ backgroundColor: color }">
    <VideoHeader
      v-if="video"
      :video="video"
      :title="title"
    />
    <div class="description" v-html="pageDescription" />
    <div class="graphic">
      <LineChart
        id="myChart0"
        :has-filters="true"
        :has-loader="true"
        :is-loading="isFetching"
        :chart-width="400"
        :chart-height="isMobile ? 400 : 250"
        :settings="settings.lineChart"
        :filters="filters.years"
        :filter-selected="filters.selected"
        :filter-type="'time'"
        @change-filter="changeFilter"
      />
    </div>
    <div v-if="youtubeLink" class="other-contents">
      <YoutubeVideo :link="youtubeLink" />
    </div>
    <ActionButtons @go-back="$emit('go-to')" />
  </div>
</template>

<script>
// Utilities
import { ref, watch } from '@nuxtjs/composition-api'
import polariceData from '../../composables/pages/index/polarice/polariceData'
// Composables
import useChartFunctions from '../../composables/chartjs/useChartFunctions'
import useConverters from '../../composables/global/useConverters'
import useLineChart from '../../composables/chartjs/useLineChart'
import useGlobalwarmingAPI from '../../composables/api/useGlobalwarmingAPI'
// Components
import VideoHeader from '../../components/VideoHeader'
import LineChart from '../../components/LineChart'
import YoutubeVideo from '../../components/YoutubeVideo'
import ActionButtons from '../../components/ActionButtons'
export default {
  name: 'PolaricePage',
  components: {
    VideoHeader,
    LineChart,
    YoutubeVideo,
    ActionButtons
  },
  props: {
    isMobile: {
      type: Boolean,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    video: {
      type: String,
      default: null
    },
    youtubeLink: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    }
  },
  setup (props) {
    const { formatTime } = useConverters()
    const { updateChartData, updateMaxY, updateMinY, filterData } = useChartFunctions()
    const {
      lineChartDataConfig, lineChartMobileConfig, lineFieldsToParse, filters, settings, pageDescription
    } = polariceData()
    const {
      lineData, lineFilteredData, lineChartData, hasLineFilteredData, setLineChartData
    } = useLineChart()
    const isFetching = ref(null)

    watch(filters, (newVal) => {
      lineFilteredData.value = filterData(lineData.value, 'time', 'years', newVal.selected)
    }, { deep: true })
    const changeFilter = (event) => {
      filters.value.selected = event
    }

    const removeNoise = (data, key, value) => {
      return data.filter((a) => { return a[key] !== value })
    }

    const polariceResponse = ref(null)
    watch(polariceResponse, (newVal) => {
      if (newVal.data) {
        lineData.value = formatTime(polariceResponse.value.data.arcticData, 'splittedData', ['year', 'month'])
        lineData.value = removeNoise(lineData.value, 'data-type', 'NRTSI-G')
      }
    }, { deep: true })
    polariceResponse.value = useGlobalwarmingAPI(() => { return { service: 'getArctic' } })

    watch(lineFilteredData, (newVal) => {
      if (!newVal) {
        return
      }
      setLineChartData(lineChartDataConfig, lineChartMobileConfig, props.isMobile, lineFieldsToParse)
      updateMinY(settings.value, lineFilteredData.value, ['extent'], 1, 9999, 'y')
      updateMaxY(settings.value, lineFilteredData.value, ['extent'], 1, 0, 'y')
      updateChartData(settings.value, 'lineChart', lineChartData.value)
    })

    return {
      pageDescription,
      hasLineFilteredData,
      filters,
      settings,
      isFetching,
      changeFilter
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/child-page.scss'
</style>
