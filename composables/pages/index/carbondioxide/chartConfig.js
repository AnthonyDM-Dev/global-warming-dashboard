import { ref } from '@nuxtjs/composition-api'

const chartConfig = () => {
  const lineChartDataConfig = {
    labels: null,
    datasets: [
      {
        label: 'CO2 cycle',
        borderColor: 'rgb(56, 47, 202)',
        backgroundColor: 'transparent',
        borderWidth: 1,
        radius: 0,
        showLine: true,
        data: null
      },
      {
        label: 'Average increment',
        borderColor: '#000000',
        backgroundColor: 'transparent',
        fill: false,
        borderDash: [6],
        borderWidth: 1,
        radius: 0,
        showLine: true,
        data: null
      }
    ]
  }
  const lineChartMobileConfig = null
  const lineFieldsToParse = [
    {
      x: ['time'],
      y: ['cycle']
    },
    {
      x: ['time'],
      y: ['trend']
    }
  ]
  const filters = ref({
    selected: 'all',
    years: [
      { label: '2 YEARS', value: 2 },
      { label: '4 YEARS', value: 4 },
      { label: '6 YEARS', value: 6 },
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
