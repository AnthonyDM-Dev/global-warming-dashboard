<template>
  <div class="polarice-page child-page" :style="{ backgroundColor: color }">
    <VideoHeader
      v-if="video"
      :video="video"
      :title="title"
    />
    <div class="description">
      <p>The Arctic is warming three times as fast and the global average. This is mainly because melting of snow and ice exposes a darker surface and increases the amount of solar energy absorbed in these areas &#40;albedo effect&#41;. This significant regional warming leads to continued loss of sea ice, melting of glaciers and of the Greenland ice cap.</p>
      <br>
      <p>Warming may influence bottom water formation through surface warming and increased input of fresh water; this would have impact on the “motor” in the ocean system, which in turn defines the framework for the world’s climate. Glaciers melt and contribute strongly toward rising sea levels.</p>
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
import getData from '../../composables/pages/index/polarice/getData'
import Service from '../../services/Service'
import VideoHeader from '../../components/VideoHeader'
import LineChart from '../../components/LineChart'
import YoutubeVideo from '../../components/YoutubeVideo'
export default {
  name: 'PolaricePage',
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
    const { polariceData, chartData, filters, settings } = getData()
    const removeNoise = (data, key, value) => {
      return data.filter((a) => { return a[key] !== value })
    }
    const getChartData = () => {
      chartData.value = {
        labels: polariceData.value.map((r) => { return r.time }),
        datasets: [
          {
            label: 'Arctic extension',
            borderColor: 'rgb(56, 47, 202)',
            backgroundColor: 'transparent',
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: parseData(polariceData.value, 'time', 'extent')
          }
        ]
      }
    }

    const res = ref(null)
    const { fetch } = useFetch(async () => {
      try {
        res.value = await Service.getArctic()
        polariceData.value = formatTime(res.value.data.arcticData, 'splittedData', ['year', 'month'])
        polariceData.value = removeNoise(polariceData.value, 'data-type', 'NRTSI-G')
      } catch (e) {
        res.value = { data: 'Something went wrong with the request. Please try again later' }
      }
    })

    fetch()

    watch(polariceData, (newVal, oldVal) => {
      if (!newVal) {
        return
      }
      getChartData()
      updateMinY(settings.value, polariceData.value, ['extent'], 1, 9999, 'y')
      updateMaxY(settings.value, polariceData.value, ['extent'], 1, 0, 'y')
      updateChartData(settings.value, 'lineChart', chartData.value)
    })

    return {
      formatTime,
      updateChartData,
      updateMaxY,
      updateMinY,
      getChartData,
      parseData,
      polariceData,
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
