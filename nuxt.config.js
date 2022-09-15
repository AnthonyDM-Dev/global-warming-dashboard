export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iEarth',
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
      { rel: 'icon', type: 'image/*', href: '/favicon.png' }
    ],
    script: [
      // Font-awesome
      {
        src: 'https://kit.fontawesome.com/9a2c4fe4ba.js',
        crossorigin: 'anonymous'
      },
      // Polyfill.io
      {
        src: 'https://polyfill.io/v3/polyfill.min.js?features=window.scroll%2Csmoothscroll%2Cwindow.scrollBy%2Cscroll',
        body: true
      }
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
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/composition-api/module'
  ],

  eslint: {
    eslintPath: './eslintrc.js'
  },

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

  // env variable
  env: {
    baseUrl: process.env.API_CLIENT_LINK
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
      config.module.rules.push({
        test: /\.сjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
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
