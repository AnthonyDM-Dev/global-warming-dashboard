<template>
  <div class="line-chart">
    <canvas :id="id" :width="chartWidth" :height="chartHeight" />
    <div v-if="hasFilters" class="line-chart__filters">
      <p>Filter by {{ filterType }}: </p>
      <div class="line-chart__filters-wrapper">
        <button
          v-for="(btn, i) in filters"
          :key="i"
          class="actions__button-filter"
          :class="{ 'selected': filterSelected === btn.value }"
          :style="{ 'color': filterSelected === btn.value ? 'white' : '' }"
          @click="$emit('change-filter', btn.value)"
        >
          <p>{{ btn.label }}</p>
        </button>
      </div>
    </div>
    <LoadingOverlay v-if="hasLoader && isLoading" />
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns'
import LoadingOverlay from './LoadingOverlay'
export default {
  name: 'LineChart',
  components: {
    LoadingOverlay
  },
  props: {
    id: {
      type: String,
      default: null
    },
    hasLoader: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    hasFilters: {
      type: Boolean,
      default: false
    },
    filters: {
      type: Array,
      default: null
    },
    filterType: {
      type: String,
      default: null
    },
    filterSelected: {
      type: [String, Number],
      default: null
    },
    chartWidth: {
      type: Number,
      default: 400
    },
    chartHeight: {
      type: Number,
      default: 250
    },
    settings: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      myChart: null
    }
  },
  watch: {
    settings: {
      handler (newVal) {
        if (!newVal) {
          return
        }
        this.updateChart()
      },
      deep: true
    }
  },
  methods: {
    cloneObj (data) {
      return JSON.parse(JSON.stringify(data))
    },
    editData () {
      this.myChart.data.labels = this.cloneObj(this.settings.data.labels)
      this.myChart.data.datasets = this.cloneObj(this.settings.data.datasets)
      this.myChart.update()
    },
    updateChart () {
      const ctx = document.getElementById(this.id)
      if (this.myChart instanceof Chart) {
        this.editData()
      } else {
        this.myChart = new Chart(ctx, this.cloneObj(this.settings))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/line-chart.scss'
</style>
