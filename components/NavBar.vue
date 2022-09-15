<template>
  <div class="nav-bar">
    <div class="nav-bar-side empty" />
    <div class="site-logo" @click="$emit('to-home')">
      <p class="site-logo__text">
        iEarth
      </p>
    </div>
    <div v-if="!isMobile" class="nav-bar-side volume">
      <i v-if="audio.isMuted" class="fa-solid fa-volume-xmark" @click="$emit('trigger-mute')" />
      <i v-else class="fa-solid fa-volume-high" @click="$emit('trigger-mute')" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: null
    },
    audio: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/nav-bar.scss'
</style>
