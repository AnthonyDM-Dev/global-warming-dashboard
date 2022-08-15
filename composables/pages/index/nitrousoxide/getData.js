import { ref } from '@nuxtjs/composition-api'

const getData = () => {
  const nitrousoxideData = ref(null)
  const chartData = ref(null)
  const filters = ref({
    selected: 'all',
    year: [1, 3, 5, 'all']
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
  })

  return {
    nitrousoxideData,
    chartData,
    filters,
    settings
  }
}

export default getData
