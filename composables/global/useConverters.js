import { getTime, getUnixTime, fromUnixTime, sub } from 'date-fns'
const useConverters = () => {
  const formatTime = (data, timeType, timeFields) => {
    const results = JSON.parse(JSON.stringify(data))
    if (timeType === 'number') {
      for (let i = 0; i < results.length; i++) {
        results[i].time = convertDecimalsToFullYear(results[i][timeFields[0]])
      }
    } else if (timeType === 'splittedData') {
      for (let i = 0; i < results.length; i++) {
        results[i].time = getTime(new Date(Number(results[i][timeFields[0]]), Number(results[i][timeFields[1]]), Number(results[i][timeFields[2]]) || null))
      }
    } else if (timeType === 'unix') {
      for (let i = 0; i < results.length; i++) {
        results[i].time = getTime(fromUnixTime(results[i][timeFields[0]]))
      }
    }
    return results
  }

  const convertDecimalsToFullYear = (yearInDecimals) => {
    const decimals = Number(yearInDecimals.split('.')[1])
    const year = Number(yearInDecimals.split('.').shift())
    const month = Math.floor(decimals / 12) + 1
    const day = 1 // Data are so big that know the specific day is negligible
    return getTime(new Date(year, month, day))
  }

  const convertDateToUnix = (date) => {
    return getUnixTime(date)
  }

  const subtractFromDate = (date, duration) => {
    return sub(date, duration)
  }

  const capitalize = (string) => {
    const words = string.split(' ')
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(' ')
  }

  return {
    formatTime,
    convertDecimalsToFullYear,
    convertDateToUnix,
    subtractFromDate,
    capitalize
  }
}

export default useConverters
