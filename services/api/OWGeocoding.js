import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.API_OPENWEATHER_GEOCODING_LINK,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.defaults.timeout = 15000

export default {
  getCoordinates (dataObj) {
    return apiClient.get('/direct?q=' + dataObj.city + ',' + dataObj.country + '&limit=' + dataObj.limit + '&appid=' + process.env.API_OPENWEATHER_KEY)
  }
}
