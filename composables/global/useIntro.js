import useAnimations from '../global/useAnimations'
import useAudio from '../global/useAudio'

const { fadeOutElement, fadeInElement } = useAnimations()
const { playAudio } = useAudio()

const hasIntroEnded = ref(false)

const useIntro = () => {
  const phrases = [
    'Climate change is REAL.',
    'The earth is sick.',
    'Watch it by yourself.'
  ]

  const startIntroAnimation = async () => {
    const p = document.getElementsByClassName('heading__text')[0]
    await fadeInElement(p, phrases[0])
    await fadeOutElement(p)
    await fadeInElement(p, phrases[1])
    await fadeOutElement(p)
    await fadeInElement(p, phrases[2])
    await fadeOutElement(p)
  }
  const endIntroAnimation = () => {
    const p = document.getElementsByClassName('heading__text')[0]
    const skip = document.getElementsByClassName('skip-button')[0]
    p.remove()
    skip.remove()
    hasIntroEnded.value = true
  }
  const skipIntro = () => {
    playAudio('home')
    endIntroAnimation()
  }

  return {
    phrases,
    hasIntroEnded,
    startIntroAnimation,
    endIntroAnimation,
    skipIntro
  }
}

export default useIntro
