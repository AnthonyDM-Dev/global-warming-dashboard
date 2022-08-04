export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'world-status-tracker',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // Font-awesome
      {
        src: 'https://kit.fontawesome.com/9a2c4fe4ba.js',
        crossorigin: 'anonymous'
      }/* ,
      // ChartJS
      {
        src: 'https://cdn.jsdelivr.net/npm/chart.js@3.8.2/dist/chart.min.js'
      }, */
      // Time adapters (https://www.chartjs.org/docs/latest/getting-started/v3-migration.html#setup-and-installation)
      /* {
        src: 'https://cdn.jsdelivr.net/npm/moment@2.27.0'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/chartjs-adapter-moment@0.1.1'
      } */
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false
        }
      })
    }
  },

  // Google Fonts
  googleFonts: {
    families: {
      Raleway: {
        wght: [100, 400, 700],
        ital: [100, 400, 700]
      }
    }
  }
}
