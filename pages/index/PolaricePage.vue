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
import global from '../../mixins/global.js'
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
  mixins: [global],
  props: {
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
  data () {
    return {
      polariceData: null,
      chartId: 'line-chart',
      datasetIdKey: 'label',
      width: 400,
      height: 400,
      cssClasses: '',
      filters: {
        year: [1, 3, 5, 'all']
      },
      styles: () => {},
      plugins: () => {},
      chartData: null,
      chartOptions: {
        responsive: true
      },
      settings: {
        lineChart: {
          type: 'line',
          data: null,
          options: {
            animation: false,
            parsing: false,
            layout: {
              padding: 20
            },
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'month'
                }
              },
              y: {
                type: 'linear',
                min: 0,
                max: 10,
                title: {
                  display: true,
                  text: 'Square kilometer (km2)',
                  font: {
                    size: 16
                  }
                }
              }
            },
            interaction: {
              mode: 'nearest',
              axis: 'x',
              intersect: false
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  font: {
                    size: 20,
                    family: "'Raleway', 'sans-serif'"
                  }
                }
              },
              tooltip: {
                enabled: false,
                backgroundColor: 'yellow'
              },
              title: {
                display: true,
                text: 'Arctic marine surface extension',
                font: {
                  size: 20,
                  family: "'Raleway', 'sans-serif'",
                  color: '#000000'
                }
              }
            }
          }
        }
      }
    }
  },
  async fetch () {
    let res
    try {
      res = await Service.getArctic()
      this.polariceData = this.formatTime(res.data.arcticData, 'splittedData', ['year', 'month'])
      this.polariceData = this.removeNoise(this.polariceData, 'data-type', 'NRTSI-G')
    } catch (e) {
      res = { data: 'Something went wrong with the request. Please try again later' }
    }
  },
  watch: {
    polariceData (newVal) {
      if (!newVal) {
        return
      }
      this.getChartData()
      this.updateMinY(this.settings, this.polariceData, ['extent'], 1, 9999, 'y')
      this.updateMaxY(this.settings, this.polariceData, ['extent'], 1, 0, 'y')
      this.updateChartData(this.settings, 'lineChart', this.chartData)
    }
  },
  methods: {
    removeNoise (data, key, value) {
      return data.filter((a) => { return a[key] !== value })
    },
    parseData (xValue, yValue) {
      return this.polariceData.map((r) => {
        return {
          x: r[xValue], y: r[yValue]
        }
      })
    },
    getChartData () {
      this.chartData = {
        labels: this.polariceData.map((r) => { return r.time }),
        datasets: [
          {
            label: 'Arctic extension',
            borderColor: 'rgb(56, 47, 202)',
            backgroundColor: 'transparent',
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: this.parseData('time', 'extent')
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/child-page.scss'
</style>
