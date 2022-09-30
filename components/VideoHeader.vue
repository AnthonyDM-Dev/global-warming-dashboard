<template>
  <div class="heading">
    <!--<video class="heading__video" autoplay loop preload playsinline>
      <source :src="'/videos/' + video" type="video/mp4">
    </video>-->
    <img class="heading__video" :src="'/videos/' + video">
    <div class="heading__overlay" />
    <p class="heading__text">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'VideoHeader',
  props: {
    title: {
      type: String,
      default: null
    },
    video: {
      type: String,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/video-header.scss'
</style>
