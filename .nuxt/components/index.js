export { default as ActionButtons } from '../..\\components\\ActionButtons.vue'
export { default as AirForm } from '../..\\components\\AirForm.vue'
export { default as AlertPopup } from '../..\\components\\AlertPopup.vue'
export { default as BannerCover } from '../..\\components\\BannerCover.vue'
export { default as BarChart } from '../..\\components\\BarChart.vue'
export { default as ChartLegend } from '../..\\components\\ChartLegend.vue'
export { default as EarthModel } from '../..\\components\\EarthModel.vue'
export { default as LineChart } from '../..\\components\\LineChart.vue'
export { default as LoadingOverlay } from '../..\\components\\LoadingOverlay.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as PropertyCard } from '../..\\components\\PropertyCard.vue'
export { default as SpinnerLoader } from '../..\\components\\SpinnerLoader.vue'
export { default as VideoHeader } from '../..\\components\\VideoHeader.vue'
export { default as YoutubeVideo } from '../..\\components\\YoutubeVideo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
