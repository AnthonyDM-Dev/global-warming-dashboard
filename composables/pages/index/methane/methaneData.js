import chartConfig from './chartConfig'

const {
  lineChartDataConfig, lineChartMobileConfig, lineFieldsToParse, filters, settings
} = chartConfig()

const methaneData = () => {
  const pageDescription = `
    <p>Today, human sources are responsible for 60% of global methane emissions, coming primarily  from the burning of fossil fuels, decomposition in landfills and the agriculture sector. Nearly a quarter of methane emissions can be attributed to agriculture, much of which is from raising livestock.</p>
    <br>
    <p>Atmospheric methane concentrations have more than doubled since the Industrial Revolution because of intensive use of oil, gas and coal, rising demand for beef and dairy products and increased production of food and organic waste.</p>
    <br>
    <p>Methane emissions in the United States decreased by 17% between 1990 and 2020. During this time period, emissions increased from sources associated with agricultural activities, while emissions decreased from other sources including landfills and coal mining and from natural gas and petroleum systems.</p>
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
