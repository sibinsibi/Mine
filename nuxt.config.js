
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mine',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' }

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],
  firebase: {
      config: {
        apiKey: "AIzaSyAzQIFHma_MZYV70DmN8Dd9pzmboxsq8JA",
        authDomain: "insta-971ed.firebaseapp.com",
        databaseURL: "https://insta-971ed.firebaseio.com",
        projectId: "insta-971ed",
        storageBucket: "insta-971ed.appspot.com",
        messagingSenderId: "860712623162",
        appId: "1:860712623162:web:3a67997d780372a456e903",
        measurementId: "G-35LCL9TEXR"
      },
      services: {
        auth: true,
        firestore: true,
        functions: true,
        storage: true,
        realtimeDb: true,
        messaging: true,
        performance: true,
        analytics: true,
        remoteConfig: true
      }
    },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
