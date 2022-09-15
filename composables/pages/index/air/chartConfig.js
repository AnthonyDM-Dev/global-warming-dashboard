import { ref } from '@nuxtjs/composition-api'

const chartConfig = () => {
  const lineChartDataConfig = {
    labels: null,
    datasets: [
      {
        label: 'PM 10',
        borderColor: 'blue',
        backgroundColor: 'transparent',
        borderWidth: 1,
        radius: 2,
        showLine: false,
        data: null
      },
      {
        label: 'PM 2.5',
        borderColor: '#a32525',
        backgroundColor: 'transparent',
        borderWidth: 1,
        radius: 2,
        showLine: false,
        data: null
      }
    ]
  }
  const lineChartMobileConfig = [
    {
      radius: 0,
      showLine: true
    },
    {
      radius: 0,
      showLine: true
    }
  ]
  const lineFieldsToParse = [
    {
      x: ['time'],
      y: ['components', 'pm10']
    },
    {
      x: ['time'],
      y: ['components', 'pm2_5']
    }
  ]
  const barChartDataConfig = {
    labels: null,
    datasets: [
      {
        label: 'PM 10',
        borderColor: 'blue',
        backgroundColor: '#6f73f6ad',
        borderWidth: 1,
        radius: 2,
        showLine: false,
        data: null
      },
      {
        label: 'PM 2.5',
        borderColor: '#a32525',
        backgroundColor: '#a32525ad',
        borderWidth: 1,
        radius: 2,
        showLine: false,
        data: null
      }
    ]
  }
  const barChartMobileConfig = [
    {
      radius: 0,
      showLine: true
    },
    {
      radius: 0,
      showLine: true
    }
  ]
  const barFieldsToParse = [
    {
      x: ['city'],
      y: ['components', 'pm10']
    },
    {
      x: ['city'],
      y: ['components', 'pm2_5']
    }
  ]
  const filters = ref({
    selected: 'all',
    months: [
      { label: '6 MONTHS', value: 6 },
      { label: '9 MONTHS', value: 9 },
      { label: '1 YEAR', value: 12 },
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
              text: 'Pollutants concentration (μg/m3)',
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
          decimation: {
            enabled: true,
            algorithm: 'lttb',
            samples: 500
          },
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
            text: 'Particulates in the air',
            font: {
              size: 20,
              family: "'Raleway', 'sans-serif'",
              color: '#000000'
            }
          }
        }
      }
    },
    barChart: {
      type: 'bar',
      data: null,
      options: {
        layout: {
          padding: 20
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Pollutants concentration (μg/m3)',
              font: {
                size: 16
              }
            }
          }
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
          title: {
            display: true,
            text: 'Comparison with most & less polluted city in the world',
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
  const legend = {
    titles: [
      'Pollutants name',
      'Good',
      'Fair',
      'Moderate',
      'Poor',
      'Very poor'
    ],
    rows: [
      {
        name: 'PM 10',
        good: '0-25',
        fair: '25-50',
        moderate: '50-90',
        poor: '90-180',
        veryPoor: '>180'
      },
      {
        name: 'PM 2.5',
        good: '0-15',
        fair: '15-30',
        moderate: '30-55',
        poor: '55-110',
        veryPoor: '>110'
      }
    ]
  }

  return {
    lineChartDataConfig,
    lineChartMobileConfig,
    lineFieldsToParse,
    barChartDataConfig,
    barChartMobileConfig,
    barFieldsToParse,
    filters,
    settings,
    legend
  }
}

export default chartConfig
