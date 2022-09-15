import { ref } from '@nuxtjs/composition-api'
import useAnimations from '../global/useAnimations'
import useProperties from '../global/useProperties'
import useAudio from '../global/useAudio'

const { fadeOutElement, fadeOutSlideElement } = useAnimations()
const { properties } = useProperties()
const { playAudio } = useAudio()

const childPage = ref({
  isVisible: false
})

const useChildPage = () => {
  const triggerChildPageVisibility = (bool) => {
    childPage.value.isVisible = bool
  }
  const changeChildPageVisibility = async (action, path, animationDirection) => {
    const childEl = document.getElementsByClassName('child-page')[0] || null
    if ((action === 'out' || path === '/') && childEl !== null) {
      (animationDirection === 'right' || animationDirection === 'left')
        ? await fadeOutSlideElement(childEl, animationDirection)
        : await fadeOutElement(childEl)
      await triggerChildPageVisibility(false)
    } else if ((action === 'in' || path !== '/')) {
      await triggerChildPageVisibility(true)
    }
  }
  const getNavLink = async (action, page) => {
    const nextPage = properties.value.list[page.index + 1] || properties.value.list[0]
    const backPage = properties.value.list[page.index - 1] || properties.value.list[5]
    playAudio('slide')
    if (action === 'next') {
      await changeChildPageVisibility('out', nextPage.link, 'right')
      return nextPage.link
    } else if (action === 'back') {
      await changeChildPageVisibility('out', backPage.link, 'left')
      return backPage.link
    }
  }
  return {
    childPage,
    changeChildPageVisibility,
    getNavLink
  }
}

export default useChildPage
