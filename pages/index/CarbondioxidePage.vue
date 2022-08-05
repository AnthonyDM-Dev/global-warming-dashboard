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
import global from '../../mixins/global.js'
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
      carbondioxideData: null,
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
                min: null,
                max: null,
                title: {
                  display: true,
                  text: 'Parts per million (ppm)',
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
                text: 'CO2 in the atmosphere',
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
      res = await Service.getCarbonDioxide()
      this.carbondioxideData = this.formatTime(res.data.co2, 'splittedData', ['year', 'month', 'day'])
    } catch (e) {
      res = { data: 'Something went wrong with the request. Please try again later' }
    }
  },
  watch: {
    carbondioxideData (newVal) {
      if (!newVal) {
        return
      }
      this.getChartData()
      this.updateMinY(this.settings, this.carbondioxideData, ['cycle', 'trend'], 5, 9999, 'y')
      this.updateMaxY(this.settings, this.carbondioxideData, ['cycle', 'trend'], 5, 0, 'y')
      this.updateChartData(this.settings, 'lineChart', this.chartData)
    }
  },
  methods: {
    parseData (xValue, yValue) {
      return this.carbondioxideData.map((r) => {
        return {
          x: r[xValue], y: r[yValue]
        }
      })
    },
    getChartData () {
      this.chartData = {
        labels: this.carbondioxideData.map((r) => { return r.time }),
        datasets: [
          {
            label: 'CO2 cycle',
            borderColor: 'rgb(56, 47, 202)',
            backgroundColor: 'transparent',
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: this.parseData('time', 'cycle')
          }, {
            label: 'Average increment',
            borderColor: '#000000',
            backgroundColor: 'transparent',
            fill: false,
            borderDash: [6],
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: this.parseData('time', 'trend')
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
