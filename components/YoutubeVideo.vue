<template>
  <div class="youtube-video">
    <iframe
      width="622"
      height="350"
      :src="link"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'YoutubeVideo',
  props: {
    link: {
      type: String,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/youtube-video.scss'
</style>
