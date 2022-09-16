export const ActionButtons = () => import('../..\\components\\ActionButtons.vue' /* webpackChunkName: "components/action-buttons" */).then(c => wrapFunctional(c.default || c))
export const AirForm = () => import('../..\\components\\AirForm.vue' /* webpackChunkName: "components/air-form" */).then(c => wrapFunctional(c.default || c))
export const AlertPopup = () => import('../..\\components\\AlertPopup.vue' /* webpackChunkName: "components/alert-popup" */).then(c => wrapFunctional(c.default || c))
export const BannerCover = () => import('../..\\components\\BannerCover.vue' /* webpackChunkName: "components/banner-cover" */).then(c => wrapFunctional(c.default || c))
export const BarChart = () => import('../..\\components\\BarChart.vue' /* webpackChunkName: "components/bar-chart" */).then(c => wrapFunctional(c.default || c))
export const ChartLegend = () => import('../..\\components\\ChartLegend.vue' /* webpackChunkName: "components/chart-legend" */).then(c => wrapFunctional(c.default || c))
export const EarthModel = () => import('../..\\components\\EarthModel.vue' /* webpackChunkName: "components/earth-model" */).then(c => wrapFunctional(c.default || c))
export const LineChart = () => import('../..\\components\\LineChart.vue' /* webpackChunkName: "components/line-chart" */).then(c => wrapFunctional(c.default || c))
export const LoadingOverlay = () => import('../..\\components\\LoadingOverlay.vue' /* webpackChunkName: "components/loading-overlay" */).then(c => wrapFunctional(c.default || c))
export const NavBar = () => import('../..\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const PropertyCard = () => import('../..\\components\\PropertyCard.vue' /* webpackChunkName: "components/property-card" */).then(c => wrapFunctional(c.default || c))
export const SpinnerLoader = () => import('../..\\components\\SpinnerLoader.vue' /* webpackChunkName: "components/spinner-loader" */).then(c => wrapFunctional(c.default || c))
export const VideoHeader = () => import('../..\\components\\VideoHeader.vue' /* webpackChunkName: "components/video-header" */).then(c => wrapFunctional(c.default || c))
export const YoutubeVideo = () => import('../..\\components\\YoutubeVideo.vue' /* webpackChunkName: "components/youtube-video" */).then(c => wrapFunctional(c.default || c))

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
