import chartConfig from './chartConfig'

const {
  lineChartDataConfig, lineChartMobileConfig, lineFieldsToParse, filters, settings
} = chartConfig()

const temperatureData = () => {
  const pageDescription = `
    <p>Given the tremendous size and heat capacity of the global oceans, it takes a massive amount of heat energy to raise Earth’s average yearly surface temperature even a small amount. The roughly 2-degree Fahrenheit (1 degrees Celsius) increase in global average surface temperature that has occurred since the pre-industrial era (1880-1900) might seem small, but it means a significant increase in accumulated heat.</p>
    <br>
    <p>That extra heat is driving regional and seasonal temperature extremes, reducing snow cover and sea ice, intensifying heavy rainfall, and changing habitat ranges for plants and animals—expanding some and shrinking others.</p>
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

export default temperatureData
