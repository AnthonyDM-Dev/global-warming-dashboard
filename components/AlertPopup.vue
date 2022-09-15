<template>
  <div class="alert-popup" :style="{ backgroundColor: backgroundColor }">
    <p v-if="title">
      {{ title }}
    </p>
    <p v-if="description">
      {{ description }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'AlertPopup',
  props: {
    title: {
      type: String,
      default: 'Something went wrong.'
    },
    description: {
      type: String,
      default: 'Please try again in few moments.'
    },
    backgroundColor: {
      type: String,
      default: '#fffe8'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/styles/alert-popup.scss'
</style>
