<template>
  <div class="banner__cover" :class="{ 'fade-out': !isVisible }">
    <h1 class="banner__header pulsate">
      Earth Tracker
    </h1>
    <p
      class="banner__button"
      :class="{ 'fade-in' : hasStartButton, 'invisible': !hasStartButton }"
      @click="$emit('trigger-banner')"
    >
      Start
    </p>
  </div>
</template>

<script>
export default {
  name: 'BannerCover',
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
