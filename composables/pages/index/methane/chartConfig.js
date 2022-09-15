import { ref } from '@nuxtjs/composition-api'

const chartConfig = () => {
  const lineChartDataConfig = {
    labels: null,
    datasets: [
      {
        label: 'Methane concentration',
        borderColor: 'rgb(56, 47, 202)',
        backgroundColor: 'transparent',
        borderWidth: 1,
        radius: 0,
        showLine: true,
        data: null,
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
        data: null,
        yAxisID: 'y'
      }
    ]
  }
  const lineChartMobileConfig = null
  const lineFieldsToParse = [
    {
      x: ['time'],
      y: ['average']
    },
    {
      x: ['time'],
      y: ['trend']
    }
  ]
  const filters = ref({
    selected: 'all',
    years: [
      { label: '5 YEARS', value: 5 },
      { label: '10 YEARS', value: 10 },
      { label: '15 YEARS', value: 15 },
      { label: 'ALL', value: 'all' }
    ]
  })
  const settings = ref({
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
  })

  return {
    lineChartDataConfig,
    lineChartMobileConfig,
    lineFieldsToParse,
    filters,
    settings
  }
}

export default chartConfig
