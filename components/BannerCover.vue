<template>
  <div class="banner__cover" :class="{ 'fade-out': !isVisible }">
    <h1 class="banner__header pulsate">
      iEarth
    </h1>
    <div class="banner__loading">
      <SpinnerLoader v-if="!hasStartButton" class="banner_button" />
      <p
        class="banner__button"
        :class="{ 'fade-in' : hasStartButton, 'invisible': !hasStartButton }"
        @click="$emit('trigger-banner')"
      >
        Start
      </p>
    </div>
  </div>
</template>

<script>
import SpinnerLoader from './SpinnerLoader'
export default {
  name: 'BannerCover',
  components: {
    SpinnerLoader
  },
  props: {
    isVisible: {
      type: Boolean,
      default: true
    },
    hasStartButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/banner-cover.scss'
</style>
