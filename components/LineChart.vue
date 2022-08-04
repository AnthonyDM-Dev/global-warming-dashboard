<template>
  <div class="line-chart">
    <canvas id="myChart" :width="chartWidth" :height="chartHeight" />
  </div>
</template>

<script>
// import { getTime } from 'date-fns'
import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns'
export default {
  name: 'LineChart',
  props: {
    chartData: {
      type: Object,
      default: null
    },
    chartWidth: {
      type: Number,
      default: 400
    },
    chartHeight: {
      type: Number,
      default: 250
    },
    settings: {
      type: Object,
      default: null
    }
  },
  watch: {
    chartData (newVal) {
      if (!newVal) {
        return
      }
      this.updateChart()
    }
  },
  /* mounted () {
    const ctx = document.getElementById('myChart')
    const labels = [
      getTime(new Date(2021, 6, 5)), // Day 1
      getTime(new Date(2021, 7, 3)), // Day 2
      getTime(new Date(2021, 7, 7)), // Day 3
      getTime(new Date(2021, 8, 4)), // Day 4
      getTime(new Date(2021, 9, 4)), // Day 6
      getTime(new Date(2021, 10, 4)), // Day 7
      getTime(new Date(2021, 11, 4)) // Day 13
    ],
    const data = {
      labels,
      datasets: [
        {
          label: 'My First Dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [
            { x: getTime(new Date(1980, 6, 5)), y: 20 },
            { x: getTime(new Date(2021, 7, 3)), y: 18 },
            { x: getTime(new Date(2021, 7, 7)), y: 15 },
            { x: getTime(new Date(2021, 8, 4)), y: 19 },
            { x: getTime(new Date(2021, 9, 4)), y: 22 },
            { x: getTime(new Date(2021, 10, 4)), y: 11 },
            { x: getTime(new Date(2021, 11, 4)), y: 13 }
          ]
        }
      ]
    }
    const myChart = new Chart(ctx, {
      type: 'line',
      data,
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month'
            },
            min: '1980-01-01'
          }
        }
      }
    })
    return myChart
  } */
  methods: {
    updateChart () {
      const ctx = document.getElementById('myChart')
      if (ctx instanceof Chart) {
        ctx.destroy()
      }
      const myChart = new Chart(ctx, this.settings)
      return myChart
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/line-chart.scss'
</style>
