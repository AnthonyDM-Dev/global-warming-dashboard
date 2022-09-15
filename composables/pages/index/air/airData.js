import chartConfig from './chartConfig'

const {
  lineChartDataConfig,
  lineChartMobileConfig,
  lineFieldsToParse,
  barChartDataConfig,
  barChartMobileConfig,
  barFieldsToParse,
  filters,
  settings,
  legend
} = chartConfig()

const airData = () => {
  const pageDescription = `
    <p>Air pollution refers to the release of pollutants into the air—pollutants which are detrimental to human health and the planet as a whole. According to the World Health Organization (WHO), each year air pollution is responsible for nearly seven million deaths around the globe.</p>
    <br>
    <p>Nine out of ten human beings currently breathe air that exceeds the WHO’s guideline limits for pollutants, with those living in low- and middle-income countries suffering the most. In the United States, the Clean Air Act, established in 1970, authorizes the U.S. Environmental Protection Agency (EPA) to safeguard public health by regulating the emissions of these harmful air pollutants.</p>
    <br>
    <p><strong>What is PM, and how does it get into the air?</strong></p>
    <p>PM stands for Particulate Matter. This term indicate a mixture of solid particles and liquid droplets found in the air.</p>
    <p>Particle pollution includes:</p>
    <ul>
      <li>PM 10: inhalable particles, with diameters that are generally 10 micrometers and smaller;</li>
      <li>PM 2.5: fine inhalable particles, with diameters that are generally 2.5 micrometers and smaller;</li>
    </ul>
    <br>
    <p><strong>What are the Harmful Effects of PM?</strong></p>
    <p>Particulate matter contains microscopic solids or liquid droplets that are so small that they can be inhaled, get deep into your lungs and cause serious health problems.</p>
  `

  return {
    lineChartDataConfig,
    lineChartMobileConfig,
    lineFieldsToParse,
    barChartDataConfig,
    barChartMobileConfig,
    barFieldsToParse,
    filters,
    settings,
    legend,
    pageDescription
  }
}

export default airData
