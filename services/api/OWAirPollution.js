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
  getAirPollution (data) {
    return apiClient.get('/air_pollution?lat=' + data.location.lat + '&lon=' + data.location.lon + '&appid=' + process.env.API_OPENWEATHER_KEY)
  },
  getAirHistory (data) {
    return apiClient.get('/air_pollution/history?lat=' + data.location.lat + '&lon=' + data.location.lon + '&start=' + data.startDate + '&end=' + data.endDate + '&appid=' + process.env.API_OPENWEATHER_KEY)
  }
}
