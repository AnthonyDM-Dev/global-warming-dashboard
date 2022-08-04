<!-- Please remove this file from your project -->
<template>
  <div class="earth-model">
    <div class="sketchfab-embed-wrapper">
      <iframe
        title="Earth"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/1e78a6b5e40f4930a801a6f4ee370224/embed?autospin=1&autostart=1&preload=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"
        class="earth-model"
        @load="$emit('script-loaded')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EarthModel'
}
</script>

<style lang="scss" scoped>
  .earth-model {
    width: 100%;
    height: 100vh;
  }
</style>
