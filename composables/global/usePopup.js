import { ref } from '@nuxtjs/composition-api'

const popup = ref({
  isVisible: false,
  title: 'Something went wrong.',
  description: 'Please check that all fields are not blank or check your internet connection and try again in few moments.',
  backgroundColor: '#c23131e8'
})

const usePopup = () => {
  const triggerPopup = async () => {
    popup.value.isVisible = true
    await setTimeout(() => {
      popup.value.isVisible = false
    }, 3000)
  }

  return {
    popup,
    triggerPopup
  }
}

export default usePopup
