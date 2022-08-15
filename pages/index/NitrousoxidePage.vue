<template>
  <div class="nitrousoxide-page child-page" :style="{ backgroundColor: color }">
    <VideoHeader
      v-if="video"
      :video="video"
      :title="title"
    />
    <div class="description">
      <p>Nitrous oxide is a by-product of biological activity of a symbiotic bacteria living in leguminous plant roots. This is a principal greenhouse gas that absorbs in the infrared wavelength region and unfortunately falls in an IR 'window' between IR absorbing features of water and carbon dioxide &#40;a characteristic of all the 'trace' greenhouse gases with significant radiative forcing&#41;.</p>
      <br>
      <p>Since the Industrial Revolution, human sources of nitrous oxide emissions have been growing. Activities such as agriculture, fossil fuel combustion and industrial processes are the primary cause of the increased nitrous oxide concentrations in the atmosphere. Together these sources are responsible for 77% of all human nitrous oxide emissions.</p>
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
import getData from '../../composables/pages/index/nitrousoxide/getData'
import Service from '../../services/Service'
import VideoHeader from '../../components/VideoHeader'
import LineChart from '../../components/LineChart'
import YoutubeVideo from '../../components/YoutubeVideo'
export default {
  name: 'NitrousoxidePage',
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
    const { nitrousoxideData, chartData, filters, settings } = getData()
    const getChartData = () => {
      chartData.value = {
        labels: nitrousoxideData.value.map((r) => { return r.time }),
        datasets: [
          {
            label: 'Nitrous Oxide concentration',
            borderColor: 'rgb(56, 47, 202)',
            backgroundColor: 'transparent',
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: parseData(nitrousoxideData.value, 'time', 'average'),
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
            data: parseData(nitrousoxideData.value, 'time', 'trend'),
            yAxisID: 'y'
          }/* , {
            label: 'NO2 emissions',
            borderColor: 'red',
            backgroundColor: 'transparent',
            fill: false,
            borderDash: [6],
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: this.parseData('time', 'averageUnc'),
            yAxisID: 'y1'
          } */
        ]
      }
    }

    const res = ref(null)
    const { fetch } = useFetch(async () => {
      try {
        res.value = await Service.getNitrousOxide()
        nitrousoxideData.value = formatTime(res.value.data.nitrous, 'number', ['date'])
      } catch (e) {
        res.value = { data: 'Something went wrong with the request. Please try again later' }
      }
    })

    fetch()

    watch(nitrousoxideData, (newVal, oldVal) => {
      if (!newVal) {
        return
      }
      getChartData()
      updateMinY(settings.value, nitrousoxideData.value, ['average', 'trend'], 5, 9999, 'y')
      updateMaxY(settings.value, nitrousoxideData.value, ['average', 'trend'], 5, 0, 'y')
      updateMinY(settings.value, nitrousoxideData.value, ['averageUnc'], 3, 9999, 'y1')
      updateMaxY(settings.value, nitrousoxideData.value, ['averageUnc'], 3, -1000, 'y1')
      updateChartData(settings.value, 'lineChart', chartData.value)
    })

    return {
      formatTime,
      updateChartData,
      updateMaxY,
      updateMinY,
      getChartData,
      parseData,
      nitrousoxideData,
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
