import { ref } from '@nuxtjs/composition-api'
import useAudio from '../global/useAudio'
import useIntro from '../global/useIntro'

const { handleAudio } = useAudio()
const { startIntroAnimation, endIntroAnimation } = useIntro()

const banner = ref({
  isVisible: true,
  hasStartButton: false
})

const useBanner = () => {
  const triggerStartButton = () => {
    banner.value.hasStartButton = !banner.value.hasStartButton
  }
  const triggerBanner = async () => {
    const bannerEl = document.getElementsByClassName('banner__cover')[0]
    bannerEl.addEventListener('animationend', async () => {
      bannerEl.remove()
      handleAudio('play')
      await startIntroAnimation()
      await endIntroAnimation()
    })
    await setTimeout(() => {
      banner.value.isVisible = !banner.value.isVisible
    }, 1000)
  }
  return {
    banner,
    triggerStartButton,
    triggerBanner
  }
}

export default useBanner
