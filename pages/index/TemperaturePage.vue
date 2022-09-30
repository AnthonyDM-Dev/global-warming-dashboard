<template>
  <div class="temperature-page child-page" :style="{ backgroundColor: color }">
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
        :is-loading="isPending"
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
import { watch, onMounted } from '@nuxtjs/composition-api'
import temperatureData from '../../composables/pages/index/temperature/temperatureData'
// Composables
import useChartFunctions from '../../composables/chartjs/useChartFunctions'
import usePopup from '../../composables/global/usePopup'
import useConverters from '../../composables/global/useConverters'
import useLineChart from '../../composables/chartjs/useLineChart'
import useGlobalwarmingAPI from '../../composables/api/useGlobalwarmingAPI'
// Components
import VideoHeader from '../../components/VideoHeader'
import LineChart from '../../components/LineChart'
import YoutubeVideo from '../../components/YoutubeVideo'
import ActionButtons from '../../components/ActionButtons'
export default {
  name: 'TemperaturePage',
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
    const { triggerPopup } = usePopup()
    const { formatTime } = useConverters()
    const { updateChartData, updateMaxY, updateMinY, filterData } = useChartFunctions()
    const {
      lineChartDataConfig, lineChartMobileConfig, lineFieldsToParse, filters, settings, pageDescription
    } = temperatureData()
    const {
      lineData, lineFilteredData, lineChartData, hasLineFilteredData, setLineChartData
    } = useLineChart()
    const {
      data, error, isPending, fetchWarmingData
    } = useGlobalwarmingAPI({ service: 'getTemperature' })

    onMounted(async () => {
      await fetchWarmingData()
      if (!error.value) {
        lineData.value = formatTime(data.value.result, 'number', ['time'])
      } else {
        triggerPopup()
      }
    })

    const changeFilter = (event) => {
      filters.value.selected = event
      lineFilteredData.value = filterData(lineData.value, 'time', 'years', filters.value.selected)
    }

    watch(lineFilteredData, (newVal) => {
      if (!newVal) {
        return
      }
      setLineChartData(lineChartDataConfig, lineChartMobileConfig, props.isMobile, lineFieldsToParse)
      updateMinY(settings.value, lineFilteredData.value, ['land', 'station'], 0.3, 9999, 'y')
      updateMaxY(settings.value, lineFilteredData.value, ['land', 'station'], 0.3, 0, 'y')
      updateChartData(settings.value, 'lineChart', lineChartData.value)
    })

    return {
      pageDescription,
      hasLineFilteredData,
      filters,
      settings,
      isPending,
      changeFilter
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/child-page.scss'
</style>
