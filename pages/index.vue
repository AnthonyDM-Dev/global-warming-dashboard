<template>
  <div id="homepage">
    <div class="fixed-background">
      <EarthModel @script-loaded="triggerStartButton" />
    </div>
    <div class="page-content">
      <div class="page-content__header">
        <div class="page-content__header-side empty" />
        <div class="site-logo" @click="returnToHomepage">
          <p class="site-logo__text">
            iEarth
          </p>
        </div>
        <div v-if="!isMobileDevice" class="page-content__header-side volume">
          <i v-if="audio.isMuted" class="fa-solid fa-volume-xmark" @click="handleAudio('triggerMute')" />
          <i v-else class="fa-solid fa-volume-high" @click="handleAudio('triggerMute')" />
        </div>
      </div>
      <div class="page-content__body">
        <div class="heading">
          <p class="heading__text" />
        </div>
        <div v-if="properties.areVisible" class="properties__container fade-in">
          <PropertyCard
            v-for="(property, i) in properties.list"
            :key="i"
            :title="property.cardTitle"
            :description="property.description"
            :link="property.link"
            :background-color="property.backgroundColor"
            @go-to="diveIn"
          />
        </div>
        <div v-if="childPage.isVisible" class="child-page__container">
          <NuxtChild
            class="fade-in"
            :is-mobile="isMobileDevice"
            :title="page?.pageTitle"
            :video="isMobileDevice ? page?.video.mobile : page?.video.desktop"
            :youtube-link="page?.youtubeLink"
            :color="page?.backgroundColor"
            @go-to="returnToHomepage"
          />
          <div class="button__arrow-left" @click="browsePage('back')">
            <i class="fa-solid fa-angle-left" />
          </div>
          <div class="button__arrow-right" @click="browsePage('next')">
            <i class="fa-solid fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
    <div class="skip-button" @click="skipIntro">
      <p>Skip</p>
    </div>
    <BannerCover
      :is-visible="banner.isVisible"
      :has-start-button="banner.hasStartButton"
      @trigger-banner="triggerBanner"
    />
    <div v-if="isMobileDevice" class="volume volume__mobile">
      <i v-if="audio.isMuted" class="fa-solid fa-volume-xmark" @click="handleAudio('triggerMute')" />
      <i v-else class="fa-solid fa-volume-high" @click="handleAudio('triggerMute')" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, useRoute, useRouter, computed } from '@nuxtjs/composition-api'
import getAudio from '../composables/global/getAudio'
import getAnimations from '../composables/global/getAnimations'
import getDeviceSize from '../composables/global/getDeviceSize'
import getData from '../composables/pages/index/getData'
import EarthModel from '../components/EarthModel.vue'
import PropertyCard from '../components/PropertyCard.vue'
import BannerCover from '../components/BannerCover.vue'
export default {
  name: 'HomePage',
  components: {
    EarthModel,
    PropertyCard,
    BannerCover
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const { audio, loadAudio, handleAudio, playAudio } = getAudio()
    const { phrases, properties, page, banner, childPage } = getData()
    const { fadeInElement, fadeOutElement, fadeOutSlideElement, scrollToTop } = getAnimations()
    const isMobileDevice = ref(null)

    const path = computed(() => { return route.value.path })

    const diveIn = (event) => {
      playAudio('dive')
      goTo(event)
    }
    const triggerStartButton = () => {
      banner.value.hasStartButton = !banner.value.hasStartButton
    }
    const triggerBanner = async () => {
      const bannerEl = document.getElementsByClassName('banner__cover')[0]
      bannerEl.addEventListener('animationend', () => {
        bannerEl.remove()
        startIntro()
        handleAudio('play')
      })
      await setTimeout(() => {
        banner.value.isVisible = !banner.value.isVisible
      }, 1000)
    }
    const checkPropertiesVisibility = async (path) => {
      const propertiesEl = document.getElementsByClassName('properties__container')[0]
      if (path === '/') {
        properties.value.areVisible = true
      } else if (propertiesEl) {
        await fadeOutElement(propertiesEl)
        properties.value.areVisible = false
      }
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
    const triggerChildPageVisibility = (bool) => {
      childPage.value.isVisible = bool
    }
    const goTo = async (event) => {
      await checkPropertiesVisibility(event)
      router.push({ path: event })
    }
    const returnToHomepage = async () => {
      playAudio('home')
      scrollToTop()
      await changeChildPageVisibility('out', '/', null)
      goTo('/')
    }
    const browsePage = async (action) => {
      const nextPage = properties.value.list[page.value.index + 1] || properties.value.list[0]
      const backPage = properties.value.list[page.value.index - 1] || properties.value.list[4]
      playAudio('slide')
      if (action === 'next') {
        await changeChildPageVisibility('out', nextPage.link, 'right')
        goTo(nextPage.link)
      } else if (action === 'back') {
        await changeChildPageVisibility('out', backPage.link, 'left')
        goTo(backPage.link)
      }
      await scrollToTop()
    }
    const startIntro = async () => {
      const p = document.getElementsByClassName('heading__text')[0]
      await fadeInElement(p, phrases[0])
      await fadeOutElement(p)
      await fadeInElement(p, phrases[1])
      await fadeOutElement(p)
      await fadeInElement(p, phrases[2])
      await fadeOutElement(p)
      endIntro()
    }
    const endIntro = async () => {
      const p = document.getElementsByClassName('heading__text')[0]
      const skip = document.getElementsByClassName('skip-button')[0]
      p.remove()
      skip.remove()
      await checkPropertiesVisibility(route.value.path)
      await changeChildPageVisibility(null, route.value.path, null)
    }
    const skipIntro = () => {
      playAudio('home')
      endIntro()
    }

    onMounted(() => {
      loadAudio()
      isMobileDevice.value = getDeviceSize().isMobile
    })

    watch(path, async (newVal, oldVal) => {
      if (newVal === '/') {
        await checkPropertiesVisibility(newVal)
        await changeChildPageVisibility('out', newVal, 'fade-out')
      } else if (newVal !== '/') {
        await checkPropertiesVisibility(newVal)
        await changeChildPageVisibility('in', newVal, 'fade-in')
      }
    })

    return {
      audio,
      loadAudio,
      handleAudio,
      playAudio,
      isMobileDevice,
      phrases,
      properties,
      page,
      banner,
      childPage,
      diveIn,
      skipIntro,
      browsePage,
      returnToHomepage,
      triggerBanner,
      triggerStartButton
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/homepage.scss';
</style>
