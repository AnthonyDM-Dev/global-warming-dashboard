<template>
  <div class="carbondioxide-page child-page" :style="{ backgroundColor: color }">
    <VideoHeader
      v-if="video"
      :video="video"
      :title="title"
    />
    <div class="description">
      <p>Carbon dioxide is an important heat-trapping gas, or greenhouse gas, that comes from the extraction and burning of fossil fuels (such as coal, oil, and natural gas), from wildfires, and from natural processes like volcanic eruptions.</p>
      <br>
      <p>These carbon emissions raise global temperatures by trapping solar energy in the atmosphere. This alters water supplies and weather patterns, changes the growing season for food crops and threatens coastal communities with increasing sea levels.</p>
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
import getData from '../../composables/pages/index/carbondioxide/getData'
import Service from '../../services/Service'
import VideoHeader from '../../components/VideoHeader'
import LineChart from '../../components/LineChart'
import YoutubeVideo from '../../components/YoutubeVideo'
export default {
  name: 'CarbondioxidePage',
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
    const { carbondioxideData, chartData, filters, settings } = getData()
    const getChartData = () => {
      chartData.value = {
        labels: carbondioxideData.value.map((r) => { return r.time }),
        datasets: [
          {
            label: 'CO2 cycle',
            borderColor: 'rgb(56, 47, 202)',
            backgroundColor: 'transparent',
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: parseData(carbondioxideData.value, 'time', 'cycle')
          }, {
            label: 'Average increment',
            borderColor: '#000000',
            backgroundColor: 'transparent',
            fill: false,
            borderDash: [6],
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: parseData(carbondioxideData.value, 'time', 'trend')
          }
        ]
      }
    }
    const res = ref(null)

    const { fetch } = useFetch(async () => {
      try {
        res.value = await Service.getCarbonDioxide()
        carbondioxideData.value = formatTime(res.value.data.co2, 'splittedData', ['year', 'month', 'day'])
      } catch (e) {
        res.value = { data: 'Something went wrong with the request. Please try again later' }
      }
    })

    fetch()

    watch(carbondioxideData, (newVal, oldVal) => {
      if (!newVal) {
        return
      }
      getChartData()
      updateMinY(settings.value, carbondioxideData.value, ['cycle', 'trend'], 5, 9999, 'y')
      updateMaxY(settings.value, carbondioxideData.value, ['cycle', 'trend'], 5, 0, 'y')
      updateChartData(settings.value, 'lineChart', chartData.value)
    })

    return {
      formatTime,
      updateChartData,
      updateMaxY,
      updateMinY,
      getChartData,
      parseData,
      carbondioxideData,
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
