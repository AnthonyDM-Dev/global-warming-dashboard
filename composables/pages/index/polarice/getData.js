import { ref } from '@nuxtjs/composition-api'

const getData = () => {
  const polariceData = ref(null)
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
  })

  return {
    polariceData,
    chartData,
    filters,
    settings
  }
}

export default getData
