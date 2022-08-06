import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.API_CLIENT_LINK,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.defaults.timeout = 15000

export default {
  getTemperature () {
    return apiClient.get('/temperature-api')
  },
  getCarbonDioxide () {
    return apiClient.get('/co2-api')
  },
  getMethane () {
    return apiClient.get('/methane-api')
  },
  getNitrousOxide () {
    return apiClient.get('/nitrous-oxide-api')
  },
  getArctic () {
    return apiClient.get('/arctic-api')
  }
}
