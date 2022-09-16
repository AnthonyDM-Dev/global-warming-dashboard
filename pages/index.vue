<template>
  <div id="homepage">
    <div class="fixed-background">
      <EarthModel @script-loaded="triggerStartButton" />
    </div>
    <div class="page-content">
      <NavBar :audio="audio" :is-mobile="isMobile" @to-home="returnToHomepage" @trigger-mute="handleAudio('triggerMute')" />
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
            :is-mobile="isMobile"
            :title="page?.pageTitle"
            :video="isMobile ? page?.video.mobile : page?.video.desktop"
            :youtube-link="page?.youtubeLink"
            :color="page?.backgroundColor"
            @go-to="returnToHomepage"
            @trigger-popup="triggerPopup"
          />
          <div class="button__arrow-left" @click="browsePage('back', page)">
            <i class="fa-solid fa-angle-left" />
          </div>
          <div class="button__arrow-right" @click="browsePage('next', page)">
            <i class="fa-solid fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
    <div class="skip-button" @click="skipIntro">
      <p>Skip</p>
    </div>
    <AlertPopup
      v-if="popup.isVisible"
      :title="popup.title"
      :description="popup.description"
      :background-color="popup.backgroundColor"
    />
    <BannerCover
      :is-visible="banner.isVisible"
      :has-start-button="banner.hasStartButton"
      @trigger-banner="triggerBanner"
    />
    <div v-if="isMobile" class="volume volume__mobile">
      <i v-if="audio.isMuted" class="fa-solid fa-volume-xmark" @click="handleAudio('triggerMute')" />
      <i v-else class="fa-solid fa-volume-high" @click="handleAudio('triggerMute')" />
    </div>
  </div>
</template>

<script>
// Utilities
import { onMounted, watch, computed, useRoute, useRouter } from '@nuxtjs/composition-api'
import { debounce } from 'debounce'
// Composables
import useAudio from '../composables/global/useAudio'
import usePopup from '../composables/global/usePopup'
import useProperties from '../composables/global/useProperties'
import useBanner from '../composables/global/useBanner'
import useIntro from '../composables/global/useIntro'
import useChildPage from '../composables/global/useChildPage'
import useAnimations from '../composables/global/useAnimations'
import useScreenOptions from '../composables/global/useScreenOptions'
// Components
import EarthModel from '../components/EarthModel.vue'
import NavBar from '../components/NavBar.vue'
import PropertyCard from '../components/PropertyCard.vue'
import BannerCover from '../components/BannerCover.vue'
export default {
  name: 'HomePage',
  components: {
    EarthModel,
    NavBar,
    PropertyCard,
    BannerCover
  },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const { scrollToTop } = useAnimations()
    const { audio, loadAudio, handleAudio, playAudio } = useAudio()
    const { properties, checkPropertiesVisibility } = useProperties()
    const { popup, triggerPopup } = usePopup()
    const { banner, triggerBanner, triggerStartButton } = useBanner()
    const { skipIntro, hasIntroEnded } = useIntro()
    const { childPage, changeChildPageVisibility, getNavLink } = useChildPage()
    const { isMobile } = useScreenOptions()

    const path = computed(() => { return route.value.path })
    const page = computed(() => {
      return properties.value.list.find((property) => {
        return property.link === route.value.path
      })
    })
    const diveIn = (event) => {
      playAudio('dive')
      goTo(event)
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
    const browsePage = debounce(async (action) => {
      const browseToLink = await getNavLink(action, page.value)
      goTo(browseToLink)
    }, 300)

    onMounted(() => {
      loadAudio()
    })

    watch(hasIntroEnded, async (newVal) => {
      if (newVal) {
        await checkPropertiesVisibility(path.value)
        await changeChildPageVisibility(null, path.value, null)
      }
    }, { deep: true })
    watch(path, async (newVal) => {
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
      handleAudio,
      isMobile,
      properties,
      page,
      banner,
      popup,
      childPage,
      diveIn,
      skipIntro,
      browsePage,
      returnToHomepage,
      triggerBanner,
      triggerPopup,
      triggerStartButton,
      path
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/homepage.scss';
</style>
