const getDeviceSize = () => {
  const isMobile = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768
  return {
    isMobile
  }
}

export default getDeviceSize
