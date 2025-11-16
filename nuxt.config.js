export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'amarachiamaechi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Amarachi Amaechi website' },
      { hid: 'description', name: 'image', href: '/icon.png' },
      { hid: 'og:description', name: 'og:description', content: 'Amarachi Amaechi website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Roboto+Slab:wght@100;300;400;500;600;700&display=swap'
      }
    ]
  },

  // Global CSS
  css: [
    '~/assets/css/style.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode'
  ],

  // Nuxt modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content'
  ],

  axios: {},

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration
  build: {
    // Turn off cssnano / PostCSS optimization that is crashing
    optimizeCSS: false
  }
}
