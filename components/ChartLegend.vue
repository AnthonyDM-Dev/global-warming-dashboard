<template>
  <div class="legend">
    <h3 class="legend__title">
      {{ title }}
    </h3>
    <p class="legend__description">
      {{ description }}
    </p>
    <table>
      <tr :class="{ 'reverse-tr': isMobile }">
        <th v-for="(legendTitle, x) in legend.titles" :key="x" :class="{ 'reverse-th': isMobile }">
          {{ legendTitle }}
        </th>
      </tr>
      <tr v-for="(row, y) in legend.rows" :key="y" :class="{ 'reverse-tr': isMobile }">
        <td :class="{ 'reverse-td': isMobile }">
          {{ row.name }}
        </td>
        <td :class="{ 'reverse-td': isMobile }">
          {{ row.good }}
        </td>
        <td :class="{ 'reverse-td': isMobile }">
          {{ row.fair }}
        </td>
        <td :class="{ 'reverse-td': isMobile }">
          {{ row.moderate }}
        </td>
        <td :class="{ 'reverse-td': isMobile }">
          {{ row.poor }}
        </td>
        <td :class="{ 'reverse-td': isMobile }">
          {{ row.veryPoor }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ChartLegend',
  props: {
    isMobile: {
      type: Boolean,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    legend: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/chart-legend.scss'
</style>
