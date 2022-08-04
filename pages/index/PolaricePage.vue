<template>
  <div class="polarice-page child-page" :style="{ backgroundColor: color }">
    <VideoHeader
      v-if="video"
      :video="video"
      :title="title"
    />
    <div class="actions">
      <button class="actions__button-back" @click="$emit('go-to')">
        <p>GO BACK</p>
      </button>
    </div>
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
                max: 10
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
                text: 'Polar Ice melting percentage',
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
      this.updateMinY(this.settings, this.polariceData, ['extent', 'area'], 1, 9999)
      this.updateMaxY(this.settings, this.polariceData, ['extent', 'area'], 1, 0)
      this.updateChartData(this.settings, 'lineChart', this.chartData)
    }
  },
  methods: {
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
            label: 'Polar Ice melting percentage',
            borderColor: 'rgb(56, 47, 202)',
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: this.parseData('time', 'extent')
          }, {
            label: 'Average increment',
            borderColor: '#000000',
            fill: false,
            borderDash: [6],
            borderWidth: 1,
            radius: 0,
            showLine: true,
            data: this.parseData('time', 'area')
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
