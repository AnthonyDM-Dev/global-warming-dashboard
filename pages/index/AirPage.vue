<template>
  <div class="air-page child-page" :style="{ backgroundColor: color }">
    <VideoHeader
      v-if="video"
      :video="video"
      :title="title"
    />
    <div class="description" v-html="pageDescription" />
    <div class="api-form">
      <AirForm
        :has-loader="true"
        :is-loading="isPending"
        :locations="locations"
        @get-coordinates="getCoordinates"
        @search-city="searchCity"
        @reset-form="resetForm"
      />
    </div>
    <div
      class="graphic"
      :class="{ 'graphic__hidden': (!hasLineFilteredData || !hasBarData) }"
    >
      <LineChart
        id="myChart0"
        :has-filters="true"
        :has-loader="false"
        :is-loading="isPending"
        :chart-width="400"
        :chart-height="isMobile ? 400 : 250"
        :settings="settings.lineChart"
        :filters="filters.months"
        :filter-selected="filters.selected"
        :filter-type="'time'"
        @change-filter="changeFilter"
      />
      <ChartLegend
        title="Air quality index levels"
        description="Pollutants concentration in μg/m3"
        :legend="legend"
        :is-mobile="isMobile"
      />
      <BarChart
        id="myChart1"
        :has-filters="false"
        :has-loader="false"
        :is-loading="isPending"
        :chart-width="400"
        :chart-height="isMobile ? 400 : 250"
        :settings="settings.barChart"
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
import airData from '../../composables/pages/index/air/airData'
// Composables
import useChartFunctions from '../../composables/chartjs/useChartFunctions'
import useBarChart from '../../composables/chartjs/useBarChart'
import useLineChart from '../../composables/chartjs/useLineChart'
import useAirForm from '../../composables/forms/useAirForm'
// Components
import VideoHeader from '../../components/VideoHeader'
import AirForm from '../../components/AirForm'
import ChartLegend from '../../components/ChartLegend'
import LineChart from '../../components/LineChart'
import BarChart from '../../components/BarChart'
import YoutubeVideo from '../../components/YoutubeVideo'
import ActionButtons from '../../components/ActionButtons'
export default {
  name: 'AirPage',
  components: {
    VideoHeader,
    AirForm,
    ChartLegend,
    LineChart,
    BarChart,
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
    const {
      updateChartData, filterData
    } = useChartFunctions()
    const {
      locations, resetForm, getCoordinates, fetchStartingDataset, isPending, searchCity
    } = useAirForm()
    const {
      lineChartDataConfig, lineChartMobileConfig, lineFieldsToParse, filters, settings, legend, pageDescription, barChartDataConfig, barChartMobileConfig, barFieldsToParse
    } = airData()
    const {
      lineData, lineFilteredData, lineChartData, hasLineFilteredData, setLineChartData, resetLineChart
    } = useLineChart()
    const {
      barData, hasBarData, barChartData, setBarChartData
    } = useBarChart()

    const changeFilter = (event) => {
      filters.value.selected = event
      lineFilteredData.value = filterData(lineData.value, 'time', 'months', filters.value.selected)
    }

    watch(lineFilteredData, (newVal) => {
      if (!newVal) {
        return
      }
      setLineChartData(lineChartDataConfig, lineChartMobileConfig, props.isMobile, lineFieldsToParse)
      updateChartData(settings.value, 'lineChart', lineChartData.value)
    })

    watch(barData, (newVal) => {
      if (!newVal) {
        return
      }
      setBarChartData(barChartDataConfig, barChartMobileConfig, props.isMobile, barFieldsToParse)
      updateChartData(settings.value, 'barChart', barChartData.value)
    }, { deep: true })

    onMounted(async () => {
      resetLineChart()
      await fetchStartingDataset()
    })

    return {
      filters,
      settings,
      locations,
      resetForm,
      getCoordinates,
      searchCity,
      hasLineFilteredData,
      hasBarData,
      changeFilter,
      legend,
      pageDescription,
      isPending
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/child-page.scss'
</style>
