<script setup>
import CarouselHome from "../components/CarouselHome.vue"
import HomePageReadMe from "./HomePageReadMore.vue"
import HomePageManage from "./HomePageManage.vue"
import HomePageFieldsLogistic from "./HomePageFieldsLogistic.vue"
import HomePageEvent from "./HomePageEvent.vue"


components: {
  CarouselHome,
  HomePageReadMe,
  HomePageManage,
  HomePageFieldsLogistic,
  HomePageEvent
}
</script>

<template>
  <div id="content-top" class="flex flex-wrap items-center justify-center h-no-menu text-center mar-top-bg bg-home bg-gradient-lr py-20 rounded-bl-150 pt-10rem">
    <CarouselHome></CarouselHome>
    
  </div>
  <div id="home">
      <HomePageReadMe />
      <HomePageManage />
      <HomePageFieldsLogistic />
      <HomePageEvent />


    </div>
</template>

<style lang="scss">
@import url(./styles.scss);
</style>
