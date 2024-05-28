// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "vue3-carousel-nuxt"],
  css: ['~/assets/css/tailwind.css'],
  plugins: [
    { src: '~/plugins/carousel.js', mode: 'client' }
  ],
  app: {
    head: {
      title: 'Meksmart',
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
        {rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css"}
        ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})