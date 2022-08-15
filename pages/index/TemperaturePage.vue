<template>
  <div class="temperature-page child-page" :style="{ backgroundColor: color }">
    <VideoHeader
      v-if="video"
      :video="video"
      :title="title"
    />
    <div class="description">
      <p>Given the tremendous size and heat capacity of the global oceans, it takes a massive amount of heat energy to raise Earth’s average yearly surface temperature even a small amount. The roughly 2-degree Fahrenheit (1 degrees Celsius) increase in global average surface temperature that has occurred since the pre-industrial era (1880-1900) might seem small, but it means a significant increase in accumulated heat.</p>
      <br>
      <p>That extra heat is driving regional and seasonal temperature extremes, reducing snow cover and sea ice, intensifying heavy rainfall, and changing habitat ranges for plants and animals—expanding some and shrinking others.</p>
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
import getData from '../../composables/pages/index/temperature/getData'
import Service from '../../services/Service'
import VideoHeader from '../../components/VideoHeader'
import LineChart from '../../components/LineChart'
import YoutubeVideo from '../../components/YoutubeVideo'
export default {
  name: 'TemperaturePage',
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
  setup (props) {
    const { formatTime } = getConverters()
    const { updateChartData, updateMaxY, updateMinY, parseData } = getChartFunctions()
    const { temperatureData, chartData, filters, settings } = getData()
    const getChartData = () => {
      chartData.value = {
        labels: temperatureData.value.map((r) => { return r.time }),
        datasets: [
          {
            label: 'Measured from land',
            borderColor: '#a32525',
            backgroundColor: 'transparent',
            borderWidth: 1,
            radius: props.isMobile ? 0 : 2,
            showLine: props.isMobile,
            data: parseData(temperatureData.value, 'time', 'land')
          },
          {
            label: 'Measured from space station',
            borderColor: 'yellow',
            backgroundColor: 'transparent',
            borderWidth: 1,
            radius: props.isMobile ? 0 : 2,
            showLine: props.isMobile,
            data: parseData(temperatureData.value, 'time', 'station')
          }
        ]
      }
    }

    const res = ref(null)
    const { fetch } = useFetch(async () => {
      try {
        res.value = await Service.getTemperature()
        temperatureData.value = formatTime(res.value.data.result, 'number', ['time'])
      } catch (e) {
        res.value = { data: 'Something went wrong with the request. Please try again later' }
      }
    })

    fetch()

    watch(temperatureData, (newVal, oldVal) => {
      if (!newVal) {
        return
      }
      getChartData()
      updateMinY(settings.value, temperatureData.value, ['land', 'station'], 0.3, 9999, 'y')
      updateMaxY(settings.value, temperatureData.value, ['land', 'station'], 0.3, 0, 'y')
      updateChartData(settings.value, 'lineChart', chartData.value)
    })

    return {
      formatTime,
      updateChartData,
      updateMaxY,
      updateMinY,
      getChartData,
      parseData,
      temperatureData,
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
