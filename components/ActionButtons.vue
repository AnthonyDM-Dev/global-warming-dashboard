<template>
  <div class="actions">
    <button class="actions__button-back" @click="$emit('go-back')">
      <p>GO BACK</p>
    </button>
  </div>
</template>
<script>
export default {
  name: 'ActionButtons'
}
</script>
<style lang="scss" scoped>
  @import '../assets/styles/action-buttons.scss';
</style>
