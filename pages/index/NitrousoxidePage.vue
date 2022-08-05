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
import global from '../../mixins/global.js'
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
      nitrousoxideData: null,
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
                position: 'left',
                display: true,
                title: {
                  display: true,
                  text: 'Parts per million (ppm)',
                  font: {
                    size: 16
                  }
                }
              },
              y1: {
                type: 'linear',
                min: null,
                max: null,
                position: 'right',
                display: false,
                grid: {
                  drawOnChartArea: false
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
                text: 'Nitrous Oxide in the atmosphere',
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
      res = await Service.getNitrousOxide()
      this.nitrousoxideData = this.formatTime(res.data.nitrous, 'number', ['date'])
    } catch (e) {
      res = { data: 'Something went wrong with the request. Please try again later' }
    }
  },
  watch: {
    nitrousoxideData (newVal) {
      if (!newVal) {
        return
      }
      this.getChartData()
      this.updateMinY(this.settings, this.nitrousoxideData, ['average', 'trend'], 5, 9999, 'y')
      this.updateMaxY(this.settings, this.nitrousoxideData, ['average', 'trend'], 5, 0, 'y')
      this.updateMinY(this.settings, this.nitrousoxideData, ['averageUnc'], 3, 9999, 'y1')
      this.updateMaxY(this.settings, this.nitrousoxideData, ['averageUnc'], 3, -1000, 'y1')
      this.updateChartData(this.settings, 'lineChart', this.chartData)
    }
  },
  methods: {
    parseData (xValue, yValue) {
      return this.nitrousoxideData.map((r) => {
        return {
          x: r[xValue], y: r[yValue]
        }
      })
    },
    getChartData () {
      this.chartData = {
        labels: this.nitrousoxideData.map((r) => { return r.time }),
        datasets: [
          {
            label: 'Nitrous Oxide concentration',
            borderColor: 'rgb(56, 47, 202)',
            backgroundColor: 'transparent',
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: this.parseData('time', 'average'),
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
            data: this.parseData('time', 'trend'),
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/child-page.scss'
</style>
