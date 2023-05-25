const chartConfig = () => {
  const lineChartDataConfig = {
    labels: null,
    datasets: [
      {
        label: 'Arctic extension',
        borderColor: 'rgb(56, 47, 202)',
        backgroundColor: 'transparent',
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
      y: ['extent']
    }
  ]
  const filters = ref({
    selected: 'all',
    years: [
      { label: '10 YEARS', value: 10 },
      { label: '20 YEARS', value: 20 },
      { label: '30 YEARS', value: 30 },
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
    lineChartDataConfig,
    lineChartMobileConfig,
    lineFieldsToParse,
    filters,
    settings
  }
}

export default chartConfig
