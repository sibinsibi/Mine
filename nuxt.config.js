
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
        apiKey: "AIzaSyAv4JtNjAG20RkBey1G_JPOyzU27DGluQ4",
        authDomain: "mine-d63d6.firebaseapp.com",
        databaseURL: "https://mine-d63d6.firebaseio.com",
        projectId: "mine-d63d6",
        storageBucket: "mine-d63d6.appspot.com",
        messagingSenderId: "924719079265",
        appId: "1:924719079265:web:3944106c860844b520af20",
        measurementId: "G-PKGWZX4MGR"
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
