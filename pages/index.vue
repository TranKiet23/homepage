<script setup>
import CarouselHome from "../components/CarouselHome.vue"
components: {
  CarouselHome
}
const slides = ref(Array.from({ length: 10 }, () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  // Figure out contrast color for font
  const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

  return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))
</script>

<template>
  <div id="content-top" class="flex flex-wrap items-center justify-center h-no-menu text-center mar-top-bg bg-home bg-gradient-lr py-20 rounded-bl-150 pt-10rem">
    <CarouselHome></CarouselHome>
  </div>
  <!-- <div>
    <h1>Nuxt Swiper Basic Example</h1>
    <hr>
    <h2>Swiper Creative Effect</h2>

    <Swiper class="swiper-cards" :width="240" :modules="[SwiperAutoplay, SwiperEffectCards]" :slides-per-view="1"
      :loop="true" :effect="'cards'" :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }">
      <SwiperSlide v-for="(slide, idx) in slides" :key="idx"
        :style="`background-color: ${slide.bg}; color: ${slide.color}`">
        {{ idx }}
      </SwiperSlide>
    </Swiper>
  </div> -->
</template>

<style lang="scss">
@import url(./styles.scss);
</style>
