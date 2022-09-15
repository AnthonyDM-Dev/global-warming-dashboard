import { ref } from '@nuxtjs/composition-api'

const audio = ref({
  isPlaying: false,
  isMuted: false,
  list: {
    background: null,
    home: null,
    dive: null,
    slide: null
  }
})

const useAudio = () => {
  const loadAudio = () => {
    audio.value.list = {
      background: new Audio(require('@/assets/sounds/space.mp3')),
      home: new Audio(require('@/assets/sounds/home.wav')),
      dive: new Audio(require('@/assets/sounds/home.wav')),
      slide: new Audio(require('@/assets/sounds/slide.wav'))
    }
  }
  const handleAudio = (action) => {
    switch (action) {
      case 'play': {
        audio.value.list.background.loop = true
        audio.value.list.background.play()
        audio.value.isPlaying = true
        break
      }
      case 'triggerMute': {
        audio.value.list.background.muted = !audio.value.list.background.muted
        audio.value.isMuted = !audio.value.isMuted
        break
      }
    }
  }

  const playAudio = (type) => {
    if (audio.value.isMuted) {
      return
    }
    audio.value.list[type].play()
  }
  return {
    audio,
    loadAudio,
    handleAudio,
    playAudio
  }
}

export default useAudio
