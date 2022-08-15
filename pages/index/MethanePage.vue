<template>
  <div class="methane-page child-page" :style="{ backgroundColor: color }">
    <VideoHeader
      v-if="video"
      :video="video"
      :title="title"
    />
    <div class="description">
      <p>Today, human sources are responsible for 60% of global methane emissions, coming primarily  from the burning of fossil fuels, decomposition in landfills and the agriculture sector. Nearly a quarter of methane emissions can be attributed to agriculture, much of which is from raising livestock.</p>
      <br>
      <p>Atmospheric methane concentrations have more than doubled since the Industrial Revolution because of intensive use of oil, gas and coal, rising demand for beef and dairy products and increased production of food and organic waste.</p>
      <br>
      <p>Methane emissions in the United States decreased by 17% between 1990 and 2020. During this time period, emissions increased from sources associated with agricultural activities, while emissions decreased from other sources including landfills and coal mining and from natural gas and petroleum systems.</p>
    </div>
    <div class="graphic">
      <LineChart
        :chart-data="chartData"
        :chart-width="400"
        :chart-height="isMobile ? 400 : 250"
        :settings="settings.lineChart"
      />
    </div>
    <div v-if="youtubeLink" class="other-contents">
      <YoutubeVideo :link="youtubeLink" />
    </div>
    <div class="actions">
      <button class="actions__button-back" @click="$emit('go-to')">
        <p>GO BACK</p>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, useFetch, watch } from '@nuxtjs/composition-api'
import getChartFunctions from '../../composables/chartjs/getChartFunctions'
import getConverters from '../../composables/global/getConverters'
import getData from '../../composables/pages/index/methane/getData'
import Service from '../../services/Service'
import VideoHeader from '../../components/VideoHeader'
import LineChart from '../../components/LineChart'
import YoutubeVideo from '../../components/YoutubeVideo'
export default {
  name: 'MethanePage',
  components: {
    VideoHeader,
    LineChart,
    YoutubeVideo
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
  setup () {
    const { formatTime } = getConverters()
    const { updateChartData, updateMaxY, updateMinY, parseData } = getChartFunctions()
    const { methaneData, chartData, filters, settings } = getData()
    const getChartData = () => {
      chartData.value = {
        labels: methaneData.value.map((r) => { return r.time }),
        datasets: [
          {
            label: 'Methane concentration',
            borderColor: 'rgb(56, 47, 202)',
            backgroundColor: 'transparent',
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: parseData(methaneData.value, 'time', 'average'),
            yAxisID: 'y'
          }, {
            label: 'Average increment',
            borderColor: '#000000',
            backgroundColor: 'transparent',
            fill: false,
            borderDash: [6],
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: parseData(methaneData.value, 'time', 'trend'),
            yAxisID: 'y'
          }/* , {
            label: 'Methane emissions',
            borderColor: 'red',
            backgroundColor: 'transparent',
            fill: false,
            borderDash: [6],
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: this.parseData('time', 'trendUnc'),
            yAxisID: 'y1'
          } */

        ]
      }
    }

    const res = ref(null)
    const { fetch } = useFetch(async () => {
      try {
        res.value = await Service.getMethane()
        methaneData.value = formatTime(res.value.data.methane, 'number', ['date'])
      } catch (e) {
        res.value = { data: 'Something went wrong with the request. Please try again later' }
      }
    })

    fetch()

    watch(methaneData, (newVal, oldVal) => {
      if (!newVal) {
        return
      }
      getChartData()
      updateMinY(settings.value, methaneData.value, ['average', 'trend'], 30, 99999, 'y')
      updateMaxY(settings.value, methaneData.value, ['average', 'trend'], 30, 0, 'y')
      updateMinY(settings.value, methaneData.value, ['trendUnc'], 3, 99999, 'y1')
      updateMaxY(settings.value, methaneData.value, ['trendUnc'], 3, -1000, 'y1')
      updateChartData(settings.value, 'lineChart', chartData.value)
    })

    return {
      formatTime,
      updateChartData,
      updateMaxY,
      updateMinY,
      getChartData,
      parseData,
      methaneData,
      chartData,
      filters,
      settings
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/child-page.scss'
</style>
