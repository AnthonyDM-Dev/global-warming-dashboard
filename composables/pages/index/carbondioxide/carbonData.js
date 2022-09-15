import chartConfig from './chartConfig'

const {
  lineChartDataConfig, lineChartMobileConfig, lineFieldsToParse, filters, settings
} = chartConfig()

const carbonData = () => {
  const pageDescription = `
    <p>Carbon dioxide is an important heat-trapping gas, or greenhouse gas, that comes from the extraction and burning of fossil fuels (such as coal, oil, and natural gas), from wildfires, and from natural processes like volcanic eruptions.</p>
    <br>
    <p>These carbon emissions raise global temperatures by trapping solar energy in the atmosphere. This alters water supplies and weather patterns, changes the growing season for food crops and threatens coastal communities with increasing sea levels.</p>
  `

  return {
    lineChartDataConfig,
    lineChartMobileConfig,
    lineFieldsToParse,
    filters,
    settings,
    pageDescription
  }
}

export default carbonData
