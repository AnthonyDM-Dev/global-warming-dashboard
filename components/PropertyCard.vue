<template>
  <div class="property-card">
    <div class="property-card__container" :style="cardStyle">
      <div class="property-card__title property-card__front">
        <p>{{ title }}</p>
      </div>
      <div class="property-card__description property-card__back">
        <div>
          <p>{{ description }}</p>
        </div>
        <div class="property-card__button" @click="$emit('go-to', link)">
          <p>Dive in</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EarthModel',
  props: {
    backgroundColor: {
      type: String,
      default: 'red'
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  },
  computed: {
    cardStyle () {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/property-card.scss'
</style>
