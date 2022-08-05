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
import global from '../../mixins/global.js'
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
      methaneData: null,
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
                text: 'Methane in the atmosphere',
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
      res = await Service.getMethane()
      this.methaneData = this.formatTime(res.data.methane, 'number', ['date'])
    } catch (e) {
      res = { data: 'Something went wrong with the request. Please try again later' }
    }
  },
  watch: {
    methaneData (newVal) {
      if (!newVal) {
        return
      }
      this.getChartData()
      this.updateMinY(this.settings, this.methaneData, ['average', 'trend'], 30, 99999, 'y')
      this.updateMaxY(this.settings, this.methaneData, ['average', 'trend'], 30, 0, 'y')
      this.updateMinY(this.settings, this.methaneData, ['trendUnc'], 3, 99999, 'y1')
      this.updateMaxY(this.settings, this.methaneData, ['trendUnc'], 3, -1000, 'y1')
      this.updateChartData(this.settings, 'lineChart', this.chartData)
    }
  },
  methods: {
    parseData (xValue, yValue) {
      return this.methaneData.map((r) => {
        return {
          x: r[xValue], y: r[yValue]
        }
      })
    },
    getChartData () {
      this.chartData = {
        labels: this.methaneData.map((r) => { return r.time }),
        datasets: [
          {
            label: 'Methane concentration',
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/child-page.scss'
</style>
