const useScreenOptions = () => {
  const isMobile = ref(null)

  onMounted(() => {
    isMobile.value = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768
  })
  return {
    isMobile
  }
}

export default useScreenOptions
