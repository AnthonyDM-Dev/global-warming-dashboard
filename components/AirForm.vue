<template>
  <div class="air-form">
    <p class="air-form__heading">
      Explore air pollution around the world
    </p>
    <form
      id="air"
      name="air"
      class="air-form__form"
      @submit.prevent="searchCity"
    >
      <div class="air-form__select">
        <select id="countries" name="countries" @input="hasCountries = true">
          <option value="" disabled selected hidden>
            Click to select a country
          </option>
          <option v-for="(country, i) in countryCodes" :key="i" :value="country.code">
            {{ country.name }}
          </option>
        </select>
      </div>
      <div v-if="hasCountries" class="air-form__input">
        <input id="city" type="text" name="city" placeholder="Search for a city" @input="getCoordinates">
      </div>
      <div v-if="locations" class="air-form__select">
        <select id="locations" name="locations" @input="canSubmit = true">
          <option value="" disabled selected hidden>
            Click to select a location
          </option>
          <option v-for="(location, i) in locations" :key="i" :value="i">
            {{ location.name }}{{ location.state | formatState }}{{ location.country | formatCountry }}
          </option>
        </select>
      </div>
      <div v-if="canSubmit" class="air-form__submit">
        <button type="submit" class="actions__button-filter">
          <p>GET AIR POLLUTION DATA</p>
        </button>
      </div>
      <div class="air-form__reset">
        <button type="button" class="actions__button-link" @click="resetForm">
          Reset All
        </button>
      </div>
      <LoadingOverlay v-if="hasLoader && isLoading" />
    </form>
  </div>
</template>

<script>
import ISO3166 from '../assets/ISO/ISO3166.json'
import LoadingOverlay from './LoadingOverlay'
export default {
  name: 'AirForm',
  components: {
    LoadingOverlay
  },
  filters: {
    formatState (value) {
      if (value) {
        return (', ' + value)
      }
    },
    formatCountry (value) {
      if (value) {
        return (' (' + value + ')')
      }
    }
  },
  props: {
    hasLoader: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: null
    },
    locations: {
      type: Array,
      default: null
    },
    airData: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      hints: null,
      hasCountries: false,
      canSubmit: false
    }
  },
  computed: {
    countryCodes () {
      return ISO3166
    }
  },
  methods: {
    resetForm (event) {
      for (const el of event.target.closest('form')) {
        el.value = ''
      }
      this.hasCountries = false
      this.canSubmit = false
      this.$emit('reset-form')
    },
    searchCity (event) {
      this.$emit('search-city', event.target)
    },
    getCoordinates (event) {
      this.$emit('get-coordinates', document.forms.air)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/air-form.scss'
</style>
