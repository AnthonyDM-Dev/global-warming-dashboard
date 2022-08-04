<template>
  <div id="homepage">
    <div class="fixed-background">
      <EarthModel @script-loaded="triggerStartButton" />
    </div>
    <div class="page-content">
      <div class="page-content__header">
        <div class="site-logo" @click="goTo('/')">
          <p class="site-logo__text">
            Earth Tracker
          </p>
        </div>
        <div class="volume">
          <audio autoplay>
            <source :src="require('@/assets/sounds/space.mp3')" type="audio/mpeg">
          </audio>
          <i class="fa-solid fa-volume-xmark" />
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
            @go-to="goTo"
          />
        </div>
        <div v-if="childPage.isVisible" class="child-page__container">
          <NuxtChild
            class="fade-in"
            :title="pageTitle"
            :video="pageVideo"
            :youtube-link="pageYoutube"
            :color="pageColor"
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
    <div class="skip-button" @click="endIntro">
      <p>Skip</p>
    </div>
    <BannerCover
      :is-visible="banner.isVisible"
      :has-start-button="banner.hasStartButton"
      @trigger-banner="triggerBanner"
    />
  </div>
</template>

<script>
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
  data () {
    return {
      banner: {
        isVisible: true,
        hasStartButton: false
      },
      phrases: [
        'The earth is sick.',
        'Climate change is REAL.',
        'Watch it by yourself.'
      ],
      childPage: {
        isVisible: false
      },
      properties: {
        areVisible: false,
        list: [
          {
            index: 0,
            cardTitle: 'Temperature',
            pageTitle: 'Temperature',
            description: 'The total average global temperature rise since the industrial revolution is around (1.0 °C / 1.8 °F). Earth northern hemisphere is warming faster. The arctic has warmed between (2 °C / 3.6 °F) and (4 °C / 7.2 °F).',
            link: '/temperaturepage',
            video: 'temperature.mp4',
            youtubeLink: 'https://www.youtube-nocookie.com/embed/3sqdyEpklFU',
            backgroundColor: 'rgb(253 21 27 / 40%)',
            isOpen: false
          },
          {
            index: 1,
            cardTitle: 'CO2',
            pageTitle: 'Carbon Dioxide',
            description: 'For thousands of years, the natural concentration of CO2 in earth atmosphere was around 280 ppm. From the beginning of the industrial revolution, human activities like the burning of fossil fuels, deforestation, and livestock have increased this amount by more than 30%.',
            link: '/carbondioxidepage',
            video: 'carbondioxide.mp4',
            youtubeLink: 'https://www.youtube-nocookie.com/embed/0oQ_l-1IdOs',
            backgroundColor: 'rgb(255 179 15 / 40%)',
            isOpen: false
          },
          {
            index: 2,
            cardTitle: 'Methane',
            pageTitle: 'Methane',
            description: '50-65% of total global methane emissions come from human activities. These include livestock, agriculture, oil and gas systems, waste from homes and businesses, landfills, and so on.',
            link: '/methanepage',
            video: 'methane.mp4',
            youtubeLink: 'https://www.youtube-nocookie.com/embed/hHB47RMOi5M',
            backgroundColor: 'rgb(132 147 36 / 40%)',
            isOpen: false
          },
          {
            index: 3,
            cardTitle: 'N2O',
            pageTitle: 'Nitrous Oxide',
            description: 'Nitrous oxide is a gas that is produced by the combustion of fossil fuel and solid waste, nitrogen-base fertilizers, sewage treatment plants, natural processes, and other agricultural and industrial activities.',
            link: '/nitrousoxidepage',
            video: 'nitrousoxide.mp4',
            youtubeLink: 'https://www.youtube-nocookie.com/embed/ivp3XXSnwvM',
            backgroundColor: 'rgb(67 127 151 / 40%)',
            isOpen: false
          },
          {
            index: 4,
            cardTitle: 'Polar Ice',
            pageTitle: 'Polar Ice',
            description: 'The arctic is warming around twice as fast as global average. Some of the reasons for this are: The arctic amplification, the albedo effect, and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic ice cover. From 2010 to present we are losing 12.85% per decade!',
            link: '/polaricepage',
            video: 'polarice.mp4',
            youtubeLink: 'https://www.youtube-nocookie.com/embed/hlVXOC6a3ME',
            backgroundColor: 'rgb(1 41 95 / 40%)',
            isOpen: false
          }
        ]
      }
    }
  },
  computed: {
    page () {
      return this.properties.list.find((property) => {
        return property.link === this.$route.path
      })
    },
    pageColor () {
      return this.page?.backgroundColor || null
    },
    pageVideo () {
      return this.page?.video || null
    },
    pageYoutube () {
      return this.page?.youtubeLink || null
    },
    pageTitle () {
      return this.page?.pageTitle || null
    }
  },
  watch: {
    async '$route.path' (newVal, oldVal) {
      // solo lato client. lato server, il check avviene dopo l'intro
      if (newVal === '/') {
        await this.checkPropertiesVisibility(newVal)
        await this.changeChildPageVisibility('out', newVal, 'fade-out')
      } else if (newVal !== '/') {
        await this.checkPropertiesVisibility(newVal)
        await this.changeChildPageVisibility('in', newVal, 'fade-in')
      }
    }
  },
  /* mounted: {
    document.ondragstart = () => false;
    document.addEventListener('pointerdown', (event) => {
      if (event.target.closest('button')) return;
      this.setPointerCoords('down', [event.clientX, event.clientY]);
    })
    document.addEventListener('pointerup', (event) => {
      this.setPointerCoords('up', [event.clientX, event.clientY]);
    })
  }, */
  methods: {
    triggerStartButton () {
      this.banner.hasStartButton = !this.banner.hasStartButton
    },
    async browsePage (action) {
      const nextPage = this.properties.list[this.page.index + 1] || this.properties.list[0]
      const backPage = this.properties.list[this.page.index - 1] || this.properties.list[4]
      if (action === 'next') {
        // await this.fadeOutSlideElement(childEl, 'right')
        await this.changeChildPageVisibility('out', nextPage.link, 'right')
        this.goTo(nextPage.link)
      } else if (action === 'back') {
        // await this.fadeOutSlideElement(childEl, 'left')
        await this.changeChildPageVisibility('out', backPage.link, 'left')
        this.goTo(backPage.link)
      }
      await this.scrollToTop()
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    async returnToHomepage () {
      this.scrollToTop()
      await this.changeChildPageVisibility('out', '/', null)
      this.goTo('/')
    },
    async checkPropertiesVisibility (path) {
      const properties = document.getElementsByClassName('properties__container')[0]
      if (path === '/') {
        this.properties.areVisible = true
      } else if (properties) {
        await this.fadeOutElement(properties)
        this.properties.areVisible = false
      }
    },
    async changeChildPageVisibility (action, path, animationDirection) {
      const childEl = document.getElementsByClassName('child-page')[0] || null
      if ((action === 'out' || path === '/') && childEl !== null) {
        console.log('siamo in if: ', action, path, animationDirection);
        (animationDirection === 'right' || animationDirection === 'left')
          ? await this.fadeOutSlideElement(childEl, animationDirection)
          : await this.fadeOutElement(childEl)
        await this.triggerChildPageVisibility(false)
      } else {
        console.log('siamo else:', action, path, animationDirection)
        await this.triggerChildPageVisibility(true)
      }
    },
    triggerChildPageVisibility (bool) {
      this.childPage.isVisible = bool
    },
    async goTo (event) {
      await this.checkPropertiesVisibility(event)
      this.$router.push({ path: event })
    },
    async triggerBanner () {
      const banner = document.getElementsByClassName('banner__cover')[0]
      banner.addEventListener('animationend', () => {
        banner.remove()
        this.startIntro()
      })
      await setTimeout(() => {
        this.banner.isVisible = !this.banner.isVisible
      }, 1000)
    },
    async startIntro () {
      const p = document.getElementsByClassName('heading__text')[0]
      await this.fadeInElement(p, this.phrases[0])
      await this.fadeOutElement(p)
      await this.fadeInElement(p, this.phrases[1])
      await this.fadeOutElement(p)
      await this.fadeInElement(p, this.phrases[2])
      await this.fadeOutElement(p)
      this.endIntro()
    },
    async endIntro () {
      const p = document.getElementsByClassName('heading__text')[0]
      const skip = document.getElementsByClassName('skip-button')[0]
      p.remove()
      skip.remove()
      await this.checkPropertiesVisibility(this.$route.path)
      await this.changeChildPageVisibility(null, this.$route.path, null)
    },
    fadeInElement (el, content) {
      return new Promise((resolve, reject) => {
        el.addEventListener('animationend', () => {
          return resolve()
        })
        if (content) {
          el.innerHTML = content
        }
        this.setClass(el, 'fade-in', 'fade-out')
      })
    },
    fadeOutElement (el) {
      return new Promise((resolve, reject) => {
        el.addEventListener('animationend', () => {
          return resolve()
        })
        this.setClass(el, 'fade-out', 'fade-in')
      })
    },
    fadeOutSlideElement (el, direction) {
      return new Promise((resolve, reject) => {
        el.addEventListener('animationend', () => {
          return resolve()
        })
        this.setClass(el, 'fade-out-slide-' + direction, 'fade-out-slide-' + direction)
      })
    },
    setClass (el, classToAdd, classToDelete) {
      if (classToDelete.length) {
        this.delClass(el, classToDelete)
      }
      return el.classList.add(classToAdd)
    },
    delClass (el, classToDelete) {
      if (el.classList.contains(classToDelete)) {
        el.classList.toggle(classToDelete)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/homepage.scss';
</style>
