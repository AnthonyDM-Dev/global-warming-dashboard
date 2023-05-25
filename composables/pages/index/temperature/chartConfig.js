const chartConfig = () => {
  const lineChartDataConfig = {
    labels: null,
    datasets: [
      {
        label: 'Measured from land',
        borderColor: '#a32525',
        backgroundColor: 'transparent',
        borderWidth: 1,
        radius: 2,
        showLine: false,
        data: null
      },
      {
        label: 'Measured from space station',
        borderColor: 'yellow',
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
      y: ['land']
    },
    {
      x: ['time'],
      y: ['station']
    }
  ]
  const filters = ref({
    selected: 'all',
    years: [
      { label: '15 YEARS', value: 15 },
      { label: '30 YEARS', value: 30 },
      { label: '50 YEARS', value: 50 },
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
              text: 'Temperature (°C)',
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
            text: 'Global surface temperature change',
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
