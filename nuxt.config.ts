// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
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