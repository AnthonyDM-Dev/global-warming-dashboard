import chartConfig from './chartConfig'

const {
  lineChartDataConfig, lineChartMobileConfig, lineFieldsToParse, filters, settings
} = chartConfig()

const nitrousData = () => {
  const pageDescription = `
    <p>Nitrous oxide is a by-product of biological activity of a symbiotic bacteria living in leguminous plant roots. This is a principal greenhouse gas that absorbs in the infrared wavelength region and unfortunately falls in an IR 'window' between IR absorbing features of water and carbon dioxide &#40;a characteristic of all the 'trace' greenhouse gases with significant radiative forcing&#41;.</p>
    <br>
    <p>Since the Industrial Revolution, human sources of nitrous oxide emissions have been growing. Activities such as agriculture, fossil fuel combustion and industrial processes are the primary cause of the increased nitrous oxide concentrations in the atmosphere. Together these sources are responsible for 77% of all human nitrous oxide emissions.</p>
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

export default nitrousData
