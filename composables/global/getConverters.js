import { getTime } from 'date-fns'
const getConverters = () => {
  const formatTime = (results, timeType, timeFields) => {
    if (timeType === 'number') {
      for (let i = 0; i < results.length; i++) {
        results[i].time = convertDecimalsToFullYear(results[i][timeFields[0]])
      }
    } else if (timeType === 'splittedData') {
      for (let i = 0; i < results.length; i++) {
        results[i].time = getTime(new Date(Number(results[i][timeFields[0]]), Number(results[i][timeFields[1]]), Number(results[i][timeFields[2]]) || null))
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

  return {
    formatTime,
    convertDecimalsToFullYear
  }
}

export default getConverters
