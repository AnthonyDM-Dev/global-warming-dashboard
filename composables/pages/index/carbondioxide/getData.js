import { ref } from '@nuxtjs/composition-api'

const getData = () => {
  const carbondioxideData = ref(null)
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
    carbondioxideData,
    chartData,
    filters,
    settings
  }
}

export default getData
