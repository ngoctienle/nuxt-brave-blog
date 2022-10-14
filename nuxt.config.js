export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,500;0,600;0,700;1,400&amp;display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&amp;display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
      },
      { rel: 'stylesheet', href: '/assets/libs/bootstrap4/bootstrap-tcl.css' }
    ],
    script: [
      {
        async: true,
        defer: true,
        crossorigin: 'anonymous',
        src: 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v7.0&appId=682829465411569&autoLogAppEvents=1',
        nonce: 'njMQVAzi'
      }
    ]
  },
  srcDir: 'src/',
  css: [],
  plugins: ['~/plugins/axios'],
  env: {
    baseUrl: process.env.BASE_URL || 'http://api-wp.blog/wp-json/wp/v2'
  },
  components: true,
  buildModules: [],
  modules: ['@nuxtjs/axios'],
  build: {}
}
