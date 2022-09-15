import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.API_OPENWEATHER_AIRPOLLUTION_LINK,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.defaults.timeout = 15000

export default {
  getAirPollution (location) {
    return apiClient.get('/air_pollution?lat=' + location.lat + '&lon=' + location.lon + '&appid=' + process.env.API_OPENWEATHER_KEY)
  },
  getAirHistory (dataObj) {
    return apiClient.get('/air_pollution/history?lat=' + dataObj.location.lat + '&lon=' + dataObj.location.lon + '&start=' + dataObj.startDate + '&end=' + dataObj.endDate + '&appid=' + process.env.API_OPENWEATHER_KEY)
  }
}
