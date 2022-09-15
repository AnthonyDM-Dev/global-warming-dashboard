<template>
  <div class="loading-overlay">
    <SpinnerLoader />
  </div>
</template>
<script>
import SpinnerLoader from './SpinnerLoader'
export default {
  name: 'LoadingOverlay',
  components: {
    SpinnerLoader
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/styles/loading-overlay.scss'
</style>
