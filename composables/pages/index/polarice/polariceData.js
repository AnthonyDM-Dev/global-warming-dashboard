import chartConfig from './chartConfig'

const {
  lineChartDataConfig, lineChartMobileConfig, lineFieldsToParse, filters, settings
} = chartConfig()

const methaneData = () => {
  const pageDescription = `
    <p>The Arctic is warming three times as fast and the global average. This is mainly because melting of snow and ice exposes a darker surface and increases the amount of solar energy absorbed in these areas &#40;albedo effect&#41;. This significant regional warming leads to continued loss of sea ice, melting of glaciers and of the Greenland ice cap.</p>
    <br>
    <p>Warming may influence bottom water formation through surface warming and increased input of fresh water; this would have impact on the “motor” in the ocean system, which in turn defines the framework for the world’s climate. Glaciers melt and contribute strongly toward rising sea levels.</p>
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

export default methaneData
